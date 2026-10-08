const container = document.getElementById('PRX');
puxarNomePokemon();

function puxarNomePokemon(){
    const urlParams = new URLSearchParams(window.location.search);
    const pokemon = urlParams.get('nome');
    if(!pokemon){
        alert("Erro ao pegar nome no URL");
    }   
    pegarDados(pokemon);
}
async function pegarDados(id) {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!resp.ok) throw new Error("Pokémon não encontrado");
            const dadosFormatados = await resp.json();
            mostrarPokemon(dadosFormatados);
    } catch (erro) {
        console.error(erro);
        container.innerHTML = "<p>Erro ao carregar dados do Pokémon.</p>";
    }
}
async function mostrarPokemon(pokemon){
    const idFormatado = `#${String(pokemon.id).padStart(3, '0')}`;
    const tipoPrincipal = pokemon.types[0].type.name;
    const status = puxarStatus(pokemon);
    console.log(status);
    const descricao = await puxarDescricao(pokemon.name);
    console.log(descricao);

    const urlImagem = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
     container.innerHTML = `
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
