// 1. ÁREAS DO HTML
let ladoDaFoto = document.getElementById('LOUD');
let ladoDireito = document.getElementById('PRX');
const ulDoDropDown = document.getElementById('ulDoDropDownContent');


const container = document.getElementById('containerPrincipal');

// LINKS DOS NAVS
const linkGeral = document.getElementById('linkGeral');
const linkCombate = document.getElementById('linkCombate');
const linkEvolucao = document.getElementById('linkEvolucao');
const linkSobre = document.getElementById('linkSobre');

// 2. CRIAR A VARIÁVEL GLOBAL (Começa vazia)
let dadosDoPokemonGlobal = null;

linkGeral.addEventListener('click', () => mostrarPokemon(dadosDoPokemonGlobal));


// 3. INICIALIZADOR DA PÁGINA
async function inicializarPagina() {
    const nomePokemon = puxarNomePokemon();
    if (nomePokemon) {
        // Aguarda a API responder e salvar os dados na global
        await pegarDados(nomePokemon); 
        
        // 5. AGORA SIM! A partir deste ponto a variável global está preenchida
        // E você pode chamar o mostrarPokemon passando a global se quiser
        mostrarPokemon(dadosDoPokemonGlobal);
    }
}

inicializarPagina();

function puxarNomePokemon(){
    const urlParams = new URLSearchParams(window.location.search);
    const pokemon = urlParams.get('nome');
    if(!pokemon){
        alert("Erro ao pegar nome no URL");
    }   
    return pokemon;
}

// 4. ADAPTANDO O PEGAR DADOS PARA ALIMENTAR A GLOBAL
async function pegarDados(id) {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!resp.ok) throw new Error("Pokémon não encontrado");
        
        const dadosFormatados = await resp.json();
        
        // Salva os dados na sua variável global para usar em qualquer lugar do script
        dadosDoPokemonGlobal = dadosFormatados; 
            
    } catch (erro) {
        console.error(erro);
        ladoDireito.innerHTML = "<p>Erro ao carregar dados do Pokémon.</p>";
    }
}

async function mostrarPokemon(pokemon){
    if (!document.getElementById('LOUD') || !document.getElementById('PRX')) {
          container.innerHTML = `
            <div id="LOUD"></div>
            <div id="PRX"></div>
        `;
        // MANTENDO SUAS VARIÁVEIS: Atualiza as duas variáveis globais do topo
        // para apontarem para as novas divs criadas na tela
        ladoDaFoto = document.getElementById('LOUD');
        ladoDireito = document.getElementById('PRX');
    }
    limparTela();
     
    console.log("foi3");

    const idFormatado = `#${String(pokemon.id).padStart(3, '0')}`;
    const tipoPrincipal = pokemon.types[0].type.name;
    const linhaEvolutiva = await mostrarLinhaDeEvolucao(pokemon);
    linkEvolucao.addEventListener('click', () =>  buscarFotoDaLinhaEvolutiva(linhaEvolutiva));
    const status = puxarStatus(pokemon);
    const abilities = pokemon.abilities;
    const nomesAbilities = abilities.map(item => item.ability.name);
    adicionarAoDropDownContent(nomesAbilities);
    console.log(nomesAbilities);
    console.log(status);
    const descricao = await puxarDescricao(pokemon.name);
    console.log(descricao);
    
    
    const gifDoPokemon =  pokemon.sprites.versions['generation-v']['black-white'].animated.front_default || pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
    const urlImagem = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
    let HtmlLadoDireito =  `
     <div class='informacoesGerais'>
        <div class='numeroNomeTipo'>
            <p>${idFormatado} | ${pokemon.name}</p>
            <p>${tipoPrincipal}</p>
        </div>

        <div class='alturaPeso'>
            <p>Altura: ${pokemon.height/10} metros</p>
            <p>Peso: ${pokemon.weight/10} Kg</p>
        </div>
    </div>
    <div class='areaStatus'>
        <h1>Status:</h1>
        <p>HP: ${status.hp} </p>
        <p>Ataque: ${status.attack} </p>
        <p>Defesa: ${status.defense} </p>
        <p>espe. Ataque: ${status.specialAttack} </p>
        <p>espe. Defesa: ${status.specialDefense} </p>
    </div>
    <div class='areaDescricao'>
        <p>${descricao}</p>
    </div>
    `
    ladoDireito.innerHTML = HtmlLadoDireito
    ladoDaFoto.innerHTML = `
        <img src="${gifDoPokemon}" alt="Gif do ${pokemon.name}" height="200px">
        <img src="${urlImagem}" alt="Foto do ${pokemon.name}" >
    `
    linkCombate.addEventListener('click', () => mostrarCombate(pokemon, status, tipoPrincipal));  
}

async function puxarDescricao(nome) {
  const respostaSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${nome}/`);
  const dadosSpecies = await respostaSpecies.json();
  
  // Encontra a primeira entrada onde o idioma seja inglês ('en')
  const entradaIngles = dadosSpecies.flavor_text_entries.find(
    (entrada) => entrada.language.name === 'en'
  );

  // Retorna o texto formatado (removendo quebras de linha estranhas que a PokeAPI costuma ter)
  return entradaIngles ? entradaIngles.flavor_text.replace(/[\n\f]/g, ' ') : 'Descrição não encontrada.';
}
function puxarStatus(dados){
 const statusMapeados = {};

    dados.stats.forEach(item => {
        // O nome original vem em kebab-case (ex: special-attack), 
        // vamos converter para camelCase para facilitar o uso no JS
        if (item.stat.name === 'special-attack') {
            statusMapeados.specialAttack = item.base_stat;
        } else if (item.stat.name === 'special-defense') {
            statusMapeados.specialDefense = item.base_stat;
        } else {
            statusMapeados[item.stat.name] = item.base_stat;
        }
    });

    // Retorna o objeto com todos os status prontos para uso
    return statusMapeados; 
}
async function mostrarLinhaDeEvolucao(pokemon){
    const especieResponse = await fetch(pokemon.species.url);
    const especieData = await especieResponse.json();
    const evolucaoResponse = await fetch(especieData.evolution_chain.url);
    const evolucaoData = await evolucaoResponse.json();
    const linhaEvolutiva = [];
    let atual = evolucaoData.chain;
     while (atual) {
      linhaEvolutiva.push(atual.species.name);
      // Se houver mais de uma evolução possível (ex: Eevee), pega a primeira do Array
      // Você pode adaptar para mapear todas se o foco for Pokémons com múltiplas ramificações
      atual = atual.evolves_to[0]; 
    }
    console.log(linhaEvolutiva);
    return linhaEvolutiva;
}
function limparTela(){
   ladoDaFoto.innerHTML = '';
   ladoDireito.innerHTML = '';
}

async function buscarFotoDaLinhaEvolutiva(pokemons){
const promessas = pokemons.map(async (nome) => {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
    const dados = await resposta.json();

    return dados.sprites.other['official-artwork'].front_default || dados.sprites.front_default;;
});

const imagens = await Promise.all(promessas);

mostrarLinhaImagemDaLinhaEvolutiva(imagens, pokemons);
}
function mostrarLinhaImagemDaLinhaEvolutiva(UrlsDasImagens, nomes){
    limparTela();
    const HtmlDasImagens = [];
    const HtmlDosNomes = [];

    
    for (let i = 0; i < UrlsDasImagens.length; i++) {
        HtmlDosNomes.push(`<span>${nomes[i]}</span>`);
        HtmlDasImagens.push(`
                <img class="FotoDoPokemonNaLinhaEvolutiva" src="${UrlsDasImagens[i]}" alt="Foto do ${i}">
                
            `);
            /*   
             */
    }
    
    // Unimos as imagens e envelopamos tudo dentro da div de uma só vez
    const htmlCompleto = `
    <div class='linhaEvolutivaPokemon'>
    <div class='imagensPokemon'>
     ${HtmlDasImagens.join('')}
    </div>
    <div class='nomesPokemons'>
     ${HtmlDosNomes.join(' ')}
     </div>
    </div>`;
    
    // Fazemos apenas UMA inserção no DOM
    container.innerHTML = htmlCompleto; 
    
    console.log(HtmlDasImagens);
}
function adicionarAoDropDownContent(abilities){
    for (let i = 0; i < abilities.length; i++) {
        ulDoDropDown.innerHTML += `<li><p>${abilities[i]}</p></li>`;
    }
}
function mostrarCombate(pokemon, status, tipo ){
    const listaAtaques = pokemon.moves.map(item => item.move.name);
    const idFormatado = `#${String(pokemon.id).padStart(3, '0')}`;
    let htmlDoCombate = `
    <div class='informacoesGerais'>
        <div class='numeroNomeTipo'>
                <p>${idFormatado} | ${pokemon.name}</p>
                <p>${tipo}</p>
        </div>
        <div id='tabela-container'>

        </div>
    </div>
        <div class='areaStatus'>
            <h1>Status:</h1>
            <p>HP: ${status.hp} </p>
            <p>Ataque: ${status.attack} </p>
            <p>Defesa: ${status.defense} </p>
            <p>espe. Ataque: ${status.specialAttack} </p>
            <p>espe. Defesa: ${status.specialDefense} </p>
        </div>
    `
    ladoDireito.innerHTML = htmlDoCombate;
    tabelaAtaques(listaAtaques);
}
function tabelaAtaques(ataques){
    let htmlAtaques = [];
    for (const i in ataques) {
        htmlAtaques.push(`<tr><td>${ataques[i]}</td></tr>`);
    }
    let htmlDaTabela = `
    <div class="areaTabela">
        <table>
            <thead>
                <th>Ataques disponiveis:</th>
            </thead>
            <tbody>
                ${htmlAtaques.join('')}
            </tbody>
        </table>
    </div>
    `
    ladoDireito.innerHTML = htmlDaTabela
}
