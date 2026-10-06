const container = document.getElementById('PRX');
puxarNomePokemon();

function puxarNomePokemon(){
    const pokemon = localStorage.getItem('pokemonAtual');
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

    const descricao = await obterDescricao(pokemon);
    

    const urlImagem = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
     container.innerHTML = `
     <div class='numeroNomeTipo'>
        <p>${idFormatado} | ${pokemon.name}</p>
        <p>${tipoPrincipal}</p>
    </div>
    <div class='alturaPeso'>
        <p>Altura: ${pokemon.height/10} metros</p>
        <p>Peso: ${pokemon.weight/10} Kg</p>
    </div>
    <div class='areaDescricao'>
        <p>${descricao}</p>
    </div>
    `
}

async function obterDescricao(pokemon){
 try {
        const resp = await fetch(`https://pokeapi.co${pokemon}`);
        const dadosEspecie = await resp.json();

        const entradaDescricao = dadosEspecie.flavor_text_entries.find(
            (entrada) => entrada.language.name === 'en'
        );

        const descricao = entradaDescricao 
            ? entradaDescricao.flavor_text.replace(/[\n\f]/g, ' ') 
            : "Descrição não encontrada.";

        return descricao;

    } catch (erro) {
        console.error("Erro ao buscar a descrição:", erro);
        return "Descrição indisponível.";
    }
    }
