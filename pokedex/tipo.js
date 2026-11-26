
// Seleciona o container dos cards
const container = document.getElementById('pokemon-cards');

const parametros = new URLSearchParams(window.location.search);
const tipoSelecionado = parametros.get('tipo');

const tituloPagina = document.getElementById('tituloPagina');

// Recupera os IDs dos Pokémon favoritados
const pokemonsFavoritados = JSON.parse(
    localStorage.getItem('pokemonFavoritos')
) || [];
pokemonsFavoritados.sort((a, b) => a-b)
// Traduz os tipos
const tiposTraduzidos = {
    normal: "Normal",
    fire: "Fogo",
    water: "Água",
    electric: "Elétrico",
    grass: "Planta",
    ice: "Gelo",
    fighting: "Lutador",
    poison: "Veneno",
    ground: "Terra",
    flying: "Voador",
    psychic: "Psíquico",
    bug: "Inseto",
    rock: "Pedra",
    ghost: "Fantasma",
    dragon: "Dragão",
    dark: "Sombrio",
    steel: "Aço",
    fairy: "Fada"
};


// Cores dos tipos
const coresTipos = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"
};


// Busca os dados de um Pokémon pelo ID
async function puxarDadosPokemons(id) {

    const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
    );

    if (!resposta.ok) {
        throw new Error(`Não foi possível encontrar o Pokémon ${id}`);
    }

    return await resposta.json();
}

// Busca dados em lotes para não fazer todas as requisições ao mesmo tempo
async function buscarEmLotes(lista, transformar) {

    const resultados = [];

    for (let i = 0; i < lista.length; i += 25) {

        const lote = lista.slice(i, i + 25);

        const dados = await Promise.all(
            lote.map(async item => {

                try {
                    const resposta = await fetch(item.url);

                    if (!resposta.ok) return null;

                    return transformar(await resposta.json());

                } catch {
                    return null;
                }

            })
        );

        resultados.push(...dados.filter(item => item !== null));
    }

    return resultados;
}


// Busca Pokémon lendários e míticos
async function carregarEspeciesEspeciais(categoria) {

    let especies = JSON.parse(
        localStorage.getItem('cacheEspeciesPokedex')
    );

    if (!especies) {

        const resposta = await fetch(
            'https://pokeapi.co/api/v2/pokemon-species?limit=2000'
        );

        const dados = await resposta.json();

        especies = await buscarEmLotes(
            dados.results,
            especie => ({
                id: especie.id,
                lendario: especie.is_legendary,
                mitico: especie.is_mythical,
                pokemon: especie.varieties.find(v => v.is_default)?.pokemon.url
            })
        );

        localStorage.setItem(
            'cacheEspeciesPokedex',
            JSON.stringify(especies)
        );
    }

    const filtrados = especies.filter(especie =>
        categoria === 'lendarios'
            ? especie.lendario
            : especie.mitico
    );

    const promessas = filtrados.map(async especie => {

        const resposta = await fetch(especie.pokemon);

        return resposta.json();

    });

    const pokemons = await Promise.all(promessas);

    pokemons.sort((a, b) => a.id - b.id);

    return pokemons;
}


// Busca formas alternativas dos Pokémon
async function carregarFormasEspeciais() {

    let ids = JSON.parse(
        localStorage.getItem('cacheFormasPokedex')
    );

    if (!ids) {

        const resposta = await fetch(
            'https://pokeapi.co/api/v2/pokemon?limit=2000'
        );

        const dados = await resposta.json();

        ids = await buscarEmLotes(
            dados.results,
            pokemon => pokemon.is_default ? null : pokemon.id
        );

        localStorage.setItem(
            'cacheFormasPokedex',
            JSON.stringify(ids)
        );
    }

    const promessas = ids.map(id => puxarDadosPokemons(id));

    const pokemons = await Promise.all(promessas);

    pokemons.sort((a, b) => a.id - b.id);

    return pokemons;
}

// Renderiza o card
function renderizarCard(pokemon) {

    const card = document.createElement('article');

    card.classList.add('card');

    const tipoPrincipal = pokemon.types[0].type.name;

    card.style.backgroundColor = coresTipos[tipoPrincipal];

    const idFormatado = `#${String(pokemon.id).padStart(3, '0')}`;

    const imagem =
        pokemon.sprites.other['official-artwork'].front_default ||
        pokemon.sprites.front_default;

    const tiposHtml = pokemon.types.map(tipo => `
        <p class="tipo-badge">
            ${tiposTraduzidos[tipo.type.name]}
        </p>
    `).join('');

    // Imagens dos favoritos
        const imgFavoritado = './assets/pagina/pokebolaFechada.png';
        const imgNaoFavoritado = './assets/pagina/pokebolaAberta.png';

        // Verifica se já está favoritado
        const jaFavoritado = pokemonsFavoritados.includes(pokemon.id);

    card.innerHTML = `

        <img class="estrela ${jaFavoritado ? 'favorito' : ''}"
        src="${jaFavoritado ? imgFavoritado : imgNaoFavoritado}"
        alt="Favoritar">

        <p class="card-id">${idFormatado}</p>

        <img src="${imagem}" alt="${pokemon.name}">

        <h2 class="card-nome">
            ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h2>

        <div class="tipos-container">
            ${tiposHtml}
        </div>
    `;

    const estrelaFavorito = card.querySelector('.estrela');

    estrelaFavorito.addEventListener('click', (event) => {

        event.stopPropagation();

        alternarFavorito(pokemon.id);

        const estaFavoritadoAgora =
            estrelaFavorito.classList.toggle('favorito');

        estrelaFavorito.src = estaFavoritadoAgora
            ? imgFavoritado
            : imgNaoFavoritado;

    });

 card.addEventListener('click', () => {
        abrirPokemon(pokemon.name);
    });
    container.appendChild(card);
}


async function carregarPokemons() {

    container.innerHTML = '';

    try {

        // SELECIONOU FAVORITOS
        if (tipoSelecionado === 'favoritos') {

            tituloPagina.textContent = 'Meus Pokémon Favoritos';

            if (pokemonsFavoritados.length === 0) {
                container.innerHTML = '<p>Você ainda não possui Pokémon favoritos!</p>';
                return;
            }

            const promessas = pokemonsFavoritados.map(id =>
                puxarDadosPokemons(id)
            );

            const pokemons = await Promise.all(promessas);

            pokemons.forEach(pokemon => renderizarCard(pokemon));

        }

        // SELECIONOU UM TIPO
// SELECIONOU LENDÁRIOS OU MÍTICOS
else if (
    tipoSelecionado === 'lendarios' ||
    tipoSelecionado === 'miticos'
) {

    tituloPagina.textContent =
        tipoSelecionado === 'lendarios'
            ? 'Pokémon Lendários'
            : 'Pokémon Míticos';

    const pokemons = await carregarEspeciesEspeciais(tipoSelecionado);

    if (pokemons.length === 0) {
        container.innerHTML = '<p>Nenhum Pokémon encontrado!</p>';
        return;
    }

    pokemons.forEach(pokemon => renderizarCard(pokemon));

}

// SELECIONOU FORMAS ESPECIAIS
else if (tipoSelecionado === 'formas-especiais') {

    tituloPagina.textContent = 'Formas Especiais';

    const pokemons = await carregarFormasEspeciais();

    if (pokemons.length === 0) {
        container.innerHTML = '<p>Nenhuma forma especial encontrada!</p>';
        return;
    }

    pokemons.forEach(pokemon => renderizarCard(pokemon));

}

        else if (tiposTraduzidos[tipoSelecionado]) {

            tituloPagina.textContent =
                `Pokémon do tipo ${tiposTraduzidos[tipoSelecionado]}`;

            const resposta = await fetch(
                `https://pokeapi.co/api/v2/type/${tipoSelecionado}`
            );

            if (!resposta.ok) {
                throw new Error('Não foi possível carregar esse tipo.');
            }

            const dados = await resposta.json();

            const listaPokemons = dados.pokemon;

            const promessas = listaPokemons.map(item =>
                fetch(item.pokemon.url).then(resposta => resposta.json())
            );

            const pokemons = await Promise.all(promessas);

            pokemons.sort((a, b) => a.id - b.id);

            pokemons.forEach(pokemon => renderizarCard(pokemon));

        }

        // TIPO INVÁLIDO
        else {

            tituloPagina.textContent = 'Tipo não encontrado';
            container.innerHTML = '<p>Tipo de Pokémon inválido!</p>';

        }

    } catch (erro) {

        console.error('Erro ao carregar Pokémon:', erro);

        container.innerHTML =
            '<p>Não foi possível carregar os Pokémon.</p>';
    }
}

function abrirPokemon(nome){
    window.open(`./pokemon.html?nome=${nome}`, '_self');
}

    function alternarFavorito(id) {

    const index = pokemonsFavoritados.indexOf(id);

    if (index === -1) {
        pokemonsFavoritados.push(id);
    } else {
        pokemonsFavoritados.splice(index, 1);
    }

    localStorage.setItem(
        'pokemonFavoritos',
        JSON.stringify(pokemonsFavoritados)
    );
}

// Executa ao abrir a página
carregarPokemons();

