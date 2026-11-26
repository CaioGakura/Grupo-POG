
// Seleciona o container dos cards
const container = document.getElementById('pokemon-cards');

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

    card.innerHTML = `
        <p class="card-id">${idFormatado}</p>

        <img src="${imagem}" alt="${pokemon.name}">

        <h2 class="card-nome">
            ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h2>

        <div class="tipos-container">
            ${tiposHtml}
        </div>
    `;
 card.addEventListener('click', () => {
        abrirPokemon(pokemon.name);
    });
    container.appendChild(card);
}


// Carrega somente os Pokémon favoritados
async function carregarFavoritos() {

    if (pokemonsFavoritados.length === 0) {
        container.innerHTML = '<p>Você ainda não possui Pokémon favoritos!</p>';
        return;
    }

    try {

        // Busca todos os Pokémon favoritados
        const promessas = pokemonsFavoritados.map(id =>
            puxarDadosPokemons(id)
        );

        // Aguarda todas as requisições
        const pokemons = await Promise.all(promessas);

        // Renderiza os cards
        pokemons.forEach(pokemon => renderizarCard(pokemon));

    } catch (erro) {

        console.error('Erro ao carregar favoritos:', erro);

        container.innerHTML =
            '<p>Não foi possível carregar seus Pokémon favoritos.</p>';
    }
}

function abrirPokemon(nome){
    window.open(`./pokemon.html?nome=${nome}`, '_self');
}
// Executa ao abrir a página
carregarFavoritos();
