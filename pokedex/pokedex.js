// Seleciona o elemento HTML onde os cards dos Pokémon serão exibidos dentro da página
const container = document.getElementById('pokemon-cards');

// Seleciona o botão de "Carregar mais" para podermos controlar os cliques e o estado dele
const botaoPegarDados = document.getElementById('botaoDeCarregarMais');

// Variável 'offset' define a partir de qual Pokémon a API deve começar a buscar (começa no 0)
let offset = 0;

// Variável 'limit' define quantos Pokémon serão trazidos por vez a cada clique/requisição
let limit = 10;


/**
 * Função assíncrona responsável por fazer uma requisição (fetch) para a URL de um Pokémon específico
 * e retornar os dados dele convertidos em formato JSON.
 */
async function puxarDadosPokemons(url) {
    const resposta = await fetch(url);
    return await resposta.json();
}

/**
 * Função principal que gerencia o carregamento dos Pokémon.
 * Ela desativa o botão, busca a lista na API, busca os detalhes de cada Pokémon e os exibe na tela.
 */
async function carregarPokemons() {
    // Desativa o botão e muda o texto para avisar que o carregamento está acontecendo
    botaoPegarDados.disabled = true;
    botaoPegarDados.innerText = 'CARREGANDO...';

    try {
        // Faz a requisição na PokéAPI usando o offset e o limit atuais para paginação
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
        const dados = await resposta.json();

        // Para cada Pokémon da lista, chama a função 'puxarDadosPokemons' para pegar os detalhes completos
        const promessas = dados.results.map(pokemon => puxarDadosPokemons(pokemon.url));

        // Aguarda todas as requisições individuais terminarem ao mesmo tempo usando Promise.all
        const pokemons = await Promise.all(promessas);

        // Para cada Pokémon obtido, chama a função que cria o card visual na tela
        pokemons.filter(pokemon => pokemon.id <= 151).forEach(pokemon => renderizarCard(pokemon));

    } catch (error) {
        // Se acontecer algum erro na requisição, mostra um alerta na tela
        alert("Deu erro:" + error);
    } finally {
        // Bloco que roda sempre (deu certo ou errado): reativa o botão e atualiza o offset para a próxima página
        botaoPegarDados.disabled = false;
        botaoPegarDados.innerText = 'CARREGAR MAIS...';
        offset += limit; // Soma 10 ao offset para que na próxima vez traga os próximos Pokémon
        if (offset >= 151) {
        botaoPegarDados.style.display = "none";
        }
    }
}

/**
 * Função que cria o elemento HTML do card de um Pokémon individual
 * e insere os dados (ID, imagem, nome e tipos) dentro do container na página.
 */

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

function renderizarCard(pokemon) {
    // Cria um elemento <article> no navegador para representar o card
    const card = document.createElement('article');
    card.classList.add('card'); // Adiciona a classe CSS 'card' nele
    const tipoPrincipal = pokemon.types[0].type.name;
    card.style.backgroundColor = coresTipos[tipoPrincipal];

    // Formata o ID do Pokémon para ter 3 dígitos (ex: #1 vira #001)
    const idFormatado = `#${String(pokemon.id).padStart(3, '0')}`;

    // Escolhe a imagem oficial de alta qualidade; se não houver, usa a imagem padrão
    const imagem = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

    // Cria os elementos HTML (parágrafos) para cada tipo que o Pokémon possui
    const tiposHtml = pokemon.types.map(t => `<p class="tipo-badge">${tiposTraduzidos[t.type.name]}</p>`).join('');

    // Insere o conteúdo estruturado em HTML dentro do card recém-criado
    card.innerHTML = `
        <p class="card-id">${idFormatado}</p>
        <img src="${imagem}" alt="${pokemon.name}">
        <h2 class="card-nome">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <div class="tipos-container">
            ${tiposHtml}
        </div>
    `;

    // Adiciona o card pronto dentro do container principal na tela
    container.appendChild(card);
}

// Adiciona um evento de clique no botão para disparar a função de carregar mais Pokémon
botaoPegarDados.addEventListener('click', carregarPokemons);

// Executa a função pela primeira vez assim que a página abre para carregar os primeiros Pokémon
carregarPokemons();

const lideresKanto = [
    {
        nome: "Brock",
        cidade: "Cidade de Pewter",
        tipo: "Pedra",
        insignia: "Insígnia: Rocha",
        imagem: "./assets/lideres/brock.png",
        imagemInsignia: "./assets/insignias/rocha.png",
        cor:"#B6A136"
    },

    {
        nome: "Misty",
        cidade: "Cidade de Cerulean",
        tipo: "Água",
        insignia: "Insígnia: Cascata",
        imagem: "./assets/lideres/misty.png",
        imagemInsignia: "./assets/insignias/cascata.png",
        cor:"#6390F0"
    },

    {
        nome: "Lt. Surge",
        cidade: "Cidade de Vermilion",
        tipo: "Elétrico",
        insignia: "Insígnia: Trovão",
        imagem: "./assets/lideres/surge.png",
        imagemInsignia: "./assets/insignias/trovao.png",
        cor:"#F7D02C"
    },

    {
        nome: "Erika",
        cidade: "Cidade de Celadon",
        tipo: "Planta",
        insignia: "Insígnia: Arco-Íris",
        imagem: "./assets/lideres/erika.png",
        imagemInsignia: "./assets/insignias/arcoiris.png",
        cor:"#7AC74C"
    },

    {
        nome: "Koga",
        cidade: "Cidade de Fuchsia",
        tipo: "Veneno",
        insignia: "Insígnia: Alma",
        imagem: "./assets/lideres/koga.png",
        imagemInsignia: "./assets/insignias/alma.png",
        cor:"#A33EA1"
    },

    {
        nome: "Sabrina",
        cidade: "Cidade de Saffron",
        tipo: "Psíquico",
        insignia: "Insígnia: Pântano",
        imagem: "./assets/lideres/sabrina.png",
        imagemInsignia: "./assets/insignias/pantano.png",
        cor:"#F95587"
    },

    {
        nome: "Blaine",
        cidade: "Ilha Cinnabar",
        tipo: "Fogo",
        insignia: "Insígnia: Vulcão",
        imagem: "./assets/lideres/blaine.png",
        imagemInsignia: "./assets/insignias/vulcao.png",
        cor:"#EE8130"
    },

    {
        nome: "Giovanni",
        cidade: "Cidade de Viridian",
        tipo: "Terra",
        insignia: "Insígnia: Terra",
        imagem: "./assets/lideres/giovanni.png",
        imagemInsignia: "./assets/insignias/terra.png",
        cor:"#E2BF65"
    }
];

const containerGinasios = document.getElementById("ginasios-cards");

function renderizarGinasios() {

    lideresKanto.forEach(lider => {

        const card = document.createElement("article");

        card.classList.add("card-ginasio");

        card.style.backgroundColor = lider.cor;

        card.innerHTML = `

            <p>${lider.cidade}</p>

            <img class="lider-img" src="${lider.imagem}" alt="${lider.nome}">

            <h2>${lider.nome}</h2>

            <p>Tipo: ${lider.tipo}</p>

            <img 
                class="insignia-img"
                src="${lider.imagemInsignia}"
                alt="${lider.insignia}"
            >

            <p>${lider.insignia}</p>
        `;

        containerGinasios.appendChild(card);
    });
}

renderizarGinasios();