// Seleciona o elemento HTML onde os cards dos Pokémon serão exibidos dentro da página
const container = document.getElementById('pokemon-cards');

// Seleciona o botão de "Carregar mais" para podermos controlar os cliques e o estado dele
const botaoPegarDados = document.getElementById('botaoDeCarregarMais');


const regioes = {

    kanto: {
        
        regioesPiedade: "KANTO",
        
        pokemonInicio: 1,
        pokemonFim: 151,
        
        geografiaPiedade: `Kanto é uma região de geografia variada, formada por extensas planícies, áreas florestais, cadeias 
        montanhosas, cavernas e uma ampla faixa litorânea. O relevo é relativamente acessível em grande parte do território,
        mas se torna mais acidentado nas zonas norte e oeste. <br><br> A região possui forte presença de rios, lagos e rotas costeiras,
                além de ilhas ao sul. Seu território combina áreas urbanizadas com grandes espaços naturais, criando uma paisagem
                equilibrada entre cidades, florestas, montanhas e mar. <br><br> O clima é predominantemente temperado, com ambientes variados 
                que favorecem uma grande diversidade de Pokémon e tornam Kanto uma região bastante propícia à exploração.`,

        historiaPiedade: `Kanto é uma das regiões mais antigas e importantes do mundo Pokémon, marcada pelo crescimento de grandes 
                cidades, pelo avanço da tecnologia e por uma longa tradição de treinamento Pokémon. Ao longo do tempo, a região se tornou 
                um importante centro de pesquisa, comércio e competição entre treinadores. <br><br> Sua história também foi marcada pela atuação 
                da Equipe Rocket, uma organização criminosa que tentou explorar Pokémon para obter poder e lucro. Após diversos confrontos 
                com treinadores, sua influência na região foi enfraquecida. <br><br> Kanto também ganhou destaque por suas pesquisas científicas, 
                especialmente pelos estudos envolvendo genética e pela criação de Mewtwo. Atualmente, a região é conhecida por sua forte 
                tradição na Liga Pokémon e por ter formado alguns dos treinadores mais reconhecidos do mundo Pokémon.`,
                
        faflPiedade: `A fauna de Kanto é extremamente diversa, com espécies de Pokémon adaptadas a florestas, montanhas, 
                cavernas, rios, mares e áreas urbanas. Essa variedade de habitats permite a presença de Pokémon terrestres, aquáticos, 
                voadores e subterrâneos em diferentes partes da região. <br><br> A flora é composta principalmente por florestas densas, campos 
                abertos, áreas de vegetação baixa e regiões costeiras. Árvores, arbustos e flores são comuns em grande parte do território, 
                enquanto as áreas montanhosas apresentam vegetação mais escassa. <br><br> Essa combinação de ambientes naturais cria um ecossistema 
                variado, onde diferentes espécies de Pokémon convivem e se adaptam às características de cada habitat.`,

        geografiaImagem: "./assets/regiao/moltres.gif",
        historiaImagem: "./assets/regiao/articuno.gif",
        fnflPiedade: "./assets/regiao/zapdos.gif",

        lideres: [

            {
                nome: "Brock",
                cidade: "Cidade de Pewter",
                tipo: "Pedra",
                insignia: "Insígnia: Rocha",
                imagem: "./assets/lideres/brock.png",
                imagemInsignia: "./assets/insignias/rocha.png",
                cor: "#B6A136"
            },
            
            {
                nome: "Misty",
                cidade: "Cidade de Cerulean",
                tipo: "Água",
                insignia: "Insígnia: Cascata",
                imagem: "./assets/lideres/misty.png",
                imagemInsignia: "./assets/insignias/cascata.png",
                cor: "#6390F0"
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
        ]
    },

    johto: {
        
        regioesPiedade: "JOHTO",
        
        pokemonInicio: 152,
        pokemonFim: 251,
        
        geografiaPiedade: `Johto é uma região de geografia diversificada, formada por extensas áreas florestais, 
        cadeias montanhosas, cavernas, lagos e zonas costeiras. Grande parte do território é composta por áreas naturais, 
        enquanto suas cidades estão conectadas por rotas que atravessam florestas e regiões montanhosas. <br><br> A região está 
        localizada a oeste de Kanto e possui uma forte ligação territorial com ela. Seu relevo alterna entre áreas planas e 
        regiões mais elevadas, criando diferentes habitats ao longo do território. <br><br> O clima é predominantemente temperado, 
        com ambientes variados que favorecem uma grande diversidade de Pokémon e tornam Johto uma região marcada pela convivência 
        entre natureza, cidades históricas e antigas tradições.`,

        historiaPiedade: `Johto é uma região profundamente ligada às antigas tradições e lendas do mundo Pokémon. Muitas de suas 
        cidades preservam construções históricas, templos e costumes que existem há várias gerações, criando uma forte ligação entre 
        os habitantes da região e os Pokémon. <br><br> Um dos acontecimentos mais importantes de sua história está relacionado às 
        torres de Ecruteak e às lendas de Ho-Oh. Segundo antigas histórias da região, um incêndio destruiu uma das torres e três 
        Pokémon perderam suas vidas, sendo posteriormente revividos por Ho-Oh. <br><br> Johto também possui uma forte ligação com 
        Kanto por meio da Liga Pokémon e das rotas que conectam as duas regiões. Sua história é marcada pela preservação das tradições, 
        pela presença de Pokémon lendários e pelo equilíbrio entre o desenvolvimento das cidades e suas antigas raízes culturais.`,

        faflPiedade: `A fauna de Johto é bastante diversificada, com espécies de Pokémon adaptadas a florestas, montanhas, cavernas, 
        lagos, rios e áreas costeiras. A região abriga espécies encontradas também em Kanto, além de Pokémon característicos de Johto, 
        formando um ecossistema bastante variado. <br><br> A flora é marcada por grandes áreas verdes, florestas densas, campos, árvores 
        antigas e vegetação próxima a lagos e montanhas. Algumas áreas preservam ambientes naturais pouco modificados pela presença 
        humana. <br><br> Essa combinação de habitats permite que Pokémon terrestres, aquáticos, voadores, insetos e outras espécies 
        convivam em diferentes partes da região, fazendo de Johto um território especialmente rico em biodiversidade.`,

        geografiaImagem: "./assets/regiao/lugia.gif",
        historiaImagem: "./assets/regiao/hooh.gif",
        fnflPiedade: "./assets/regiao/celebi.gif",

        lideres: [

                {
                    nome: "Falkner",
                    cidade: "Cidade de Violet",
                    tipo: "Voador",
                    insignia: "Insígnia: Zéfiro",
                    imagem: "./assets/lideres/falkner.png",
                    imagemInsignia: "./assets/insignias/zefiro.png",
                    cor: "#A98FF3"
                },
                
                {
                    nome: "Bugsy",
                    cidade: "Cidade de Azalea",
                    tipo: "Inseto",
                    insignia: "Insígnia: Colmeia",
                    imagem: "./assets/lideres/bugsy.png",
                    imagemInsignia: "./assets/insignias/colmeia.png",
                    cor: "#A6B91A"
                },

                {
                    nome: "Whitney",
                    cidade: "Cidade de Goldenrod",
                    tipo: "Normal",
                    insignia: "Insígnia: Planície",
                    imagem: "./assets/lideres/whitney.png",
                    imagemInsignia: "./assets/insignias/planicie.png",
                    cor: "#A8A77A"
                },

                {
                    nome: "Morty",
                    cidade: "Cidade de Ecruteak",
                    tipo: "Fantasma",
                    insignia: "Insígnia: Névoa",
                    imagem: "./assets/lideres/morty.png",
                    imagemInsignia: "./assets/insignias/nevoa.png",
                    cor: "#735797"
                },

                {
                    nome: "Chuck",
                    cidade: "Cidade de Cianwood",
                    tipo: "Lutador",
                    insignia: "Insígnia: Tempestade",
                    imagem: "./assets/lideres/chuck.png",
                    imagemInsignia: "./assets/insignias/tempestade.png",
                    cor: "#C22E28"
                },

                {
                    nome: "Jasmine",
                    cidade: "Cidade de Olivine",
                    tipo: "Aço",
                    insignia: "Insígnia: Mineral",
                    imagem: "./assets/lideres/jasmine.png",
                    imagemInsignia: "./assets/insignias/mineral.png",
                    cor: "#B7B7CE"
                },

                {
                    nome: "Pryce",
                    cidade: "Cidade de Mahogany",
                    tipo: "Gelo",
                    insignia: "Insígnia: Geleira",
                    imagem: "./assets/lideres/pryce.png",
                    imagemInsignia: "./assets/insignias/geleira.png",
                    cor: "#96D9D6"
                },

                {
                    nome: "Clair",
                    cidade: "Cidade de Blackthorn",
                    tipo: "Dragão",
                    insignia: "Insígnia: Nascente",
                    imagem: "./assets/lideres/clair.png",
                    imagemInsignia: "./assets/insignias/nascente.png",
                    cor: "#6F35FC"
                }
            ]
    },

    hoenn: {
        
    regioesPiedade: "HOENN",
    
    pokemonInicio: 252,
    pokemonFim: 386,
    
    geografiaPiedade: `Hoenn é uma região marcada por uma grande presença de oceanos, ilhas, praias e áreas costeiras, 
    combinadas com florestas, montanhas, cavernas e extensas rotas terrestres. Grande parte de seu território é cercada pelo mar, 
    fazendo com que a navegação seja uma característica importante para quem explora a região. <br><br> No interior encontram-se 
    áreas vulcânicas, desertos, florestas densas e regiões de clima mais úmido, criando uma grande variedade de paisagens. 
    Algumas cidades foram construídas próximas ao oceano ou integradas diretamente à natureza. <br><br> Essa diversidade geográfica 
    torna Hoenn uma região de contrastes, onde terra e mar possuem grande importância e diferentes ambientes favorecem a presença 
    de uma ampla variedade de Pokémon.`,

    historiaPiedade: `A história de Hoenn está profundamente ligada às forças da natureza, principalmente à relação entre terra, 
    mar e atmosfera. Antigas lendas da região contam sobre Groudon e Kyogre, Pokémon capazes de expandir continentes e oceanos, 
    cujos confrontos teriam provocado grandes mudanças no território. <br><br> Rayquaza também ocupa uma posição importante nessas 
    histórias, sendo conhecido por interromper os conflitos entre essas forças. Ao longo do tempo, essas lendas passaram a fazer 
    parte da cultura e da identidade de Hoenn. <br><br> Em tempos mais recentes, a região também foi marcada pelas ações da Equipe 
    Magma e da Equipe Aqua, grupos que buscavam alterar o equilíbrio natural de Hoenn de maneiras diferentes. Esses acontecimentos 
    reforçaram ainda mais a importância da preservação do equilíbrio entre os diversos ambientes da região.`,

    faflPiedade: `A fauna de Hoenn apresenta uma grande diversidade de Pokémon adaptados a ambientes terrestres e aquáticos. 
    Espécies podem ser encontradas em florestas tropicais, cavernas, montanhas, desertos, rios, praias, ilhas e extensas áreas 
    oceânicas. A forte presença do mar faz com que Pokémon aquáticos sejam especialmente comuns em diferentes partes da região. 
    <br><br> A flora também varia bastante conforme o ambiente, incluindo florestas densas, campos, vegetação costeira, árvores 
    tropicais e áreas mais secas próximas ao deserto e às regiões vulcânicas. <br><br> Essa combinação de diferentes ecossistemas 
    permite que inúmeras espécies coexistam em Hoenn, tornando a região uma das mais variadas em termos de habitats naturais.`,

    geografiaImagem: "./assets/regiao/kyogre.gif",
    historiaImagem: "./assets/regiao/groudon.gif",
    fnflPiedade: "./assets/regiao/rayquaza.gif",

    lideres: [

        {
            nome: "Roxanne",
            cidade: "Cidade de Rustboro",
            tipo: "Pedra",
            insignia: "Insígnia: Pedra",
            imagem: "./assets/lideres/roxanne.png",
            imagemInsignia: "./assets/insignias/pedra.png",
            cor: "#B6A136"
        },
        
        {
            nome: "Brawly",
            cidade: "Cidade de Dewford",
            tipo: "Lutador",
            insignia: "Insígnia: Punho",
            imagem: "./assets/lideres/brawly.png",
            imagemInsignia: "./assets/insignias/punho.png",
            cor: "#C22E28"
        },

        {
            nome: "Wattson",
            cidade: "Cidade de Mauville",
            tipo: "Elétrico",
            insignia: "Insígnia: Dínamo",
            imagem: "./assets/lideres/wattson.png",
            imagemInsignia: "./assets/insignias/dinamo.png",
            cor: "#F7D02C"
        },

        {
            nome: "Flannery",
            cidade: "Cidade de Lavaridge",
            tipo: "Fogo",
            insignia: "Insígnia: Calor",
            imagem: "./assets/lideres/flannery.png",
            imagemInsignia: "./assets/insignias/calor.png",
            cor: "#EE8130"
        },

        {
            nome: "Norman",
            cidade: "Cidade de Petalburg",
            tipo: "Normal",
            insignia: "Insígnia: Equilíbrio",
            imagem: "./assets/lideres/norman.png",
            imagemInsignia: "./assets/insignias/equilibrio.png",
            cor: "#A8A77A"
        },

        {
            nome: "Winona",
            cidade: "Cidade de Fortree",
            tipo: "Voador",
            insignia: "Insígnia: Pena",
            imagem: "./assets/lideres/winona.png",
            imagemInsignia: "./assets/insignias/pena.png",
            cor: "#A98FF3"
        },

        {
            nome: "Tate e Liza",
            cidade: "Cidade de Mossdeep",
            tipo: "Psíquico",
            insignia: "Insígnia: Mente",
            imagem: "./assets/lideres/tate-liza.png",
            imagemInsignia: "./assets/insignias/mente.png",
            cor: "#F95587"
        },

        {
            nome: "Wallace",
            cidade: "Cidade de Sootopolis",
            tipo: "Água",
            insignia: "Insígnia: Chuva",
            imagem: "./assets/lideres/wallace.png",
            imagemInsignia: "./assets/insignias/chuva.png",
            cor: "#6390F0"
        }
    ]
},

sinnoh: {
        
    regioesPiedade: "SINNOH",
    
    pokemonInicio: 387,
    pokemonFim: 493,
    
    geografiaPiedade: `Sinnoh é uma região de relevo bastante acidentado, marcada por grandes montanhas, lagos, florestas, 
    cavernas e áreas cobertas por neve. O Monte Coronet atravessa grande parte do território e divide a região em diferentes 
    áreas, funcionando como um dos principais pontos geográficos de Sinnoh. <br><br> Ao redor da cadeia montanhosa encontram-se 
    cidades, vilarejos, florestas e extensas rotas naturais. A região também possui três grandes lagos, além de áreas costeiras 
    e ilhas próximas ao continente. <br><br> O clima varia bastante de acordo com a localização, indo de áreas relativamente 
    temperadas até regiões extremamente frias no norte. Essa diversidade cria diferentes habitats e torna Sinnoh uma região 
    marcada por paisagens naturais imponentes e ambientes bastante variados.`,

    historiaPiedade: `Sinnoh é uma região profundamente ligada às antigas lendas sobre a origem do mundo Pokémon. Segundo suas 
    tradições, Arceus teria surgido antes do próprio universo e estaria relacionado à criação de Dialga, Palkia e Giratina, 
    Pokémon associados ao tempo, espaço e a uma dimensão diferente conhecida como Mundo Distorcido. <br><br> Os lagos de Sinnoh 
    também possuem grande importância histórica e mitológica, sendo associados a Uxie, Mesprit e Azelf. Diversas ruínas, templos 
    e monumentos espalhados pela região preservam registros dessas antigas histórias. <br><br> Em tempos mais recentes, Sinnoh 
    foi ameaçada pela Equipe Galactic, organização liderada por Cyrus, que buscava utilizar o poder dos Pokémon lendários para 
    criar uma nova realidade. Após esses acontecimentos, a região continuou sendo reconhecida por sua forte ligação com os 
    mistérios relacionados à origem e à estrutura do universo Pokémon.`,

    faflPiedade: `A fauna de Sinnoh é composta por Pokémon adaptados a uma grande variedade de ambientes, incluindo montanhas, 
    florestas, cavernas, lagos, rios, áreas costeiras e regiões cobertas por neve. Pokémon terrestres, aquáticos, voadores e 
    espécies resistentes ao frio podem ser encontrados em diferentes partes do território. <br><br> A flora varia conforme a 
    altitude e o clima. Áreas mais baixas apresentam campos, árvores e florestas densas, enquanto regiões próximas às montanhas 
    possuem vegetação mais escassa. No extremo norte, o clima frio e a presença constante de neve limitam consideravelmente 
    a vegetação. <br><br> Essa variedade de ambientes cria diferentes ecossistemas e permite que inúmeras espécies de Pokémon 
    convivam em Sinnoh, muitas delas especialmente adaptadas às condições naturais da região.`,

    geografiaImagem: "./assets/regiao/dialga.gif",
    historiaImagem: "./assets/regiao/palkia.gif",
    fnflPiedade: "./assets/regiao/giratina.gif",

    lideres: [

        {
            nome: "Roark",
            cidade: "Cidade de Oreburgh",
            tipo: "Pedra",
            insignia: "Insígnia: Carvão",
            imagem: "./assets/lideres/roark.png",
            imagemInsignia: "./assets/insignias/carvao.png",
            cor: "#B6A136"
        },

        {
            nome: "Gardenia",
            cidade: "Cidade de Eterna",
            tipo: "Planta",
            insignia: "Insígnia: Floresta",
            imagem: "./assets/lideres/gardenia.png",
            imagemInsignia: "./assets/insignias/floresta.png",
            cor: "#7AC74C"
        },

        {
            nome: "Maylene",
            cidade: "Cidade de Veilstone",
            tipo: "Lutador",
            insignia: "Insígnia: Pedregulho",
            imagem: "./assets/lideres/maylene.png",
            imagemInsignia: "./assets/insignias/pedregulho.png",
            cor: "#C22E28"
        },

        {
            nome: "Crasher Wake",
            cidade: "Cidade de Pastoria",
            tipo: "Água",
            insignia: "Insígnia: Pântano",
            imagem: "./assets/lideres/crasher-wake.png",
            imagemInsignia: "./assets/insignias/pantano-sinnoh.png",
            cor: "#6390F0"
        },

        {
            nome: "Fantina",
            cidade: "Cidade de Hearthome",
            tipo: "Fantasma",
            insignia: "Insígnia: Relíquia",
            imagem: "./assets/lideres/fantina.png",
            imagemInsignia: "./assets/insignias/reliquia.png",
            cor: "#735797"
        },

        {
            nome: "Byron",
            cidade: "Cidade de Canalave",
            tipo: "Aço",
            insignia: "Insígnia: Mina",
            imagem: "./assets/lideres/byron.png",
            imagemInsignia: "./assets/insignias/mina.png",
            cor: "#B7B7CE"
        },

        {
            nome: "Candice",
            cidade: "Cidade de Snowpoint",
            tipo: "Gelo",
            insignia: "Insígnia: Geleira",
            imagem: "./assets/lideres/candice.png",
            imagemInsignia: "./assets/insignias/geleira-sinnoh.png",
            cor: "#96D9D6"
        },

        {
            nome: "Volkner",
            cidade: "Cidade de Sunyshore",
            tipo: "Elétrico",
            insignia: "Insígnia: Farol",
            imagem: "./assets/lideres/volkner.png",
            imagemInsignia: "./assets/insignias/farol.png",
            cor: "#F7D02C"
        }
    ]
},

unova: {
        
    regioesPiedade: "UNOVA",
    
    pokemonInicio: 494,
    pokemonFim: 649,
    
    geografiaPiedade: `Unova é uma região de geografia bastante diversificada, formada por grandes cidades, extensas florestas, 
    desertos, cavernas, montanhas, rios e áreas costeiras. Diferente de várias regiões anteriores, Unova apresenta uma forte presença 
    urbana, com grandes centros populacionais conectados por pontes, estradas e diferentes rotas. <br><br> Ao mesmo tempo, a região 
    preserva grandes áreas naturais, incluindo florestas densas, desertos e regiões montanhosas. A presença de rios e baías também 
    influencia bastante sua paisagem e a distribuição das cidades. <br><br> Essa combinação entre grandes centros urbanos e ambientes 
    naturais faz de Unova uma região de fortes contrastes, oferecendo diversos habitats para Pokémon e diferentes formas de exploração.`,

    historiaPiedade: `A história de Unova está profundamente ligada às lendas de Reshiram e Zekrom. Segundo antigas histórias, 
    dois irmãos governavam a região ao lado de um poderoso Pokémon dragão. Porém, os irmãos passaram a discordar sobre seus ideais, 
    fazendo com que o Pokémon original se dividisse em Reshiram e Zekrom. <br><br> Essa antiga disputa entre verdade e ideais se tornou 
    uma das principais lendas de Unova. Kyurem também está ligado a esses acontecimentos e aos mistérios envolvendo a origem dos três 
    Pokémon lendários. <br><br> Em tempos mais recentes, a região enfrentou a atuação da Equipe Plasma, organização que afirmava querer 
    libertar os Pokémon de seus treinadores. Sob a liderança de N e a influência de Ghetsis, o grupo acabou envolvido em acontecimentos 
    que ameaçaram toda a região e revelaram diferentes interpretações sobre a relação entre humanos e Pokémon.`,

    faflPiedade: `A fauna de Unova apresenta uma grande variedade de espécies de Pokémon adaptadas a ambientes urbanos e naturais. 
    Pokémon podem ser encontrados em florestas, desertos, cavernas, montanhas, rios, áreas costeiras e até mesmo próximos às grandes 
    cidades da região. <br><br> A flora também varia bastante, com áreas de vegetação densa, campos, árvores, plantas adaptadas a regiões 
    secas e vegetação próxima a rios e zonas costeiras. Algumas partes de Unova apresentam mudanças visuais de acordo com as estações 
    do ano, alterando a aparência da vegetação e de determinados ambientes. <br><br> Essa diversidade de habitats permite a presença 
    de inúmeras espécies e torna Unova uma região com ecossistemas bastante variados.`,

    geografiaImagem: "./assets/regiao/reshiram.gif",
    historiaImagem: "./assets/regiao/zekrom.gif",
    fnflPiedade: "./assets/regiao/kyurem.gif",

    lideres: [

        {
            nome: "Cilan, Chili e Cress",
            cidade: "Cidade de Striaton",
            tipo: "Planta / Fogo / Água",
            insignia: "Insígnia: Trio",
            imagem: "./assets/lideres/cilan-chili-cress.png",
            imagemInsignia: "./assets/insignias/trio.png",
            cor: "#7AC74C"
        },

        {
            nome: "Lenora",
            cidade: "Cidade de Nacrene",
            tipo: "Normal",
            insignia: "Insígnia: Básica",
            imagem: "./assets/lideres/lenora.png",
            imagemInsignia: "./assets/insignias/basica.png",
            cor: "#A8A77A"
        },

        {
            nome: "Burgh",
            cidade: "Cidade de Castelia",
            tipo: "Inseto",
            insignia: "Insígnia: Inseto",
            imagem: "./assets/lideres/burgh.png",
            imagemInsignia: "./assets/insignias/inseto.png",
            cor: "#A6B91A"
        },

        {
            nome: "Elesa",
            cidade: "Cidade de Nimbasa",
            tipo: "Elétrico",
            insignia: "Insígnia: Raio",
            imagem: "./assets/lideres/elesa.png",
            imagemInsignia: "./assets/insignias/raio.png",
            cor: "#F7D02C"
        },

        {
            nome: "Clay",
            cidade: "Cidade de Driftveil",
            tipo: "Terra",
            insignia: "Insígnia: Terremoto",
            imagem: "./assets/lideres/clay.png",
            imagemInsignia: "./assets/insignias/terremoto.png",
            cor: "#E2BF65"
        },

        {
            nome: "Skyla",
            cidade: "Cidade de Mistralton",
            tipo: "Voador",
            insignia: "Insígnia: Jato",
            imagem: "./assets/lideres/skyla.png",
            imagemInsignia: "./assets/insignias/jato.png",
            cor: "#A98FF3"
        },

        {
            nome: "Brycen",
            cidade: "Cidade de Icirrus",
            tipo: "Gelo",
            insignia: "Insígnia: Congelamento",
            imagem: "./assets/lideres/brycen.png",
            imagemInsignia: "./assets/insignias/congelamento.png",
            cor: "#96D9D6"
        },

        {
            nome: "Drayden / Iris",
            cidade: "Cidade de Opelucid",
            tipo: "Dragão",
            insignia: "Insígnia: Lenda",
            imagem: "./assets/lideres/drayden-iris.png",
            imagemInsignia: "./assets/insignias/lenda.png",
            cor: "#6F35FC"
        }
    ]
},

kalos: {
        
    regioesPiedade: "KALOS",
    
    pokemonInicio: 650,
    pokemonFim: 721,
    
    geografiaPiedade: `Kalos é uma região de geografia diversificada, formada por grandes cidades, extensos campos, florestas, 
    cavernas, áreas montanhosas e uma ampla faixa costeira. Seu território possui uma região central bastante desenvolvida, onde 
    está localizada Lumiose City, uma das maiores cidades do mundo Pokémon. <br><br> Ao redor das áreas urbanizadas encontram-se 
    rotas naturais, florestas, rios, praias e regiões rochosas. O território também apresenta áreas de clima mais frio próximas 
    às montanhas, além de zonas costeiras de clima mais ameno. <br><br> Essa combinação de ambientes urbanos e naturais cria uma 
    paisagem bastante variada e permite que diferentes espécies de Pokémon encontrem habitats adequados em várias partes de Kalos.`,

    historiaPiedade: `A história de Kalos é marcada por antigos conflitos e pela existência de uma poderosa arma criada há milhares 
    de anos. Segundo as lendas da região, o rei AZ construiu uma máquina para trazer seu Pokémon de volta à vida após perdê-lo durante 
    uma guerra. Posteriormente, a máquina foi transformada em uma arma capaz de utilizar uma enorme quantidade de energia. <br><br> 
    Xerneas e Yveltal possuem uma forte ligação com as antigas histórias de Kalos, representando forças relacionadas à vida e à 
    destruição. Zygarde também está associado ao equilíbrio dos ecossistemas da região. <br><br> Em tempos recentes, a Equipe Flare, 
    liderada por Lysandre, tentou utilizar novamente a antiga arma de Kalos. Seus planos foram interrompidos, preservando a região 
    e reforçando a importância do equilíbrio entre humanos, Pokémon e natureza.`,

    faflPiedade: `A fauna de Kalos é composta por uma grande variedade de Pokémon encontrados em florestas, campos, cavernas, 
    montanhas, rios, áreas costeiras e ambientes urbanos. Além das espécies características da região, Kalos também abriga Pokémon 
    encontrados em outras partes do mundo, criando uma fauna bastante diversificada. <br><br> A flora varia entre extensos campos 
    floridos, florestas densas, árvores, arbustos e vegetação costeira. Algumas áreas apresentam grande concentração de flores e 
    plantas, enquanto regiões montanhosas possuem vegetação mais limitada devido às temperaturas mais baixas. <br><br> Essa variedade 
    de ambientes permite a formação de diferentes ecossistemas e torna Kalos uma região rica em biodiversidade.`,

    geografiaImagem: "./assets/regiao/xerneas.gif",
    historiaImagem: "./assets/regiao/yveltal.gif",
    fnflPiedade: "./assets/regiao/zygarde.gif",

    lideres: [

        {
            nome: "Viola",
            cidade: "Cidade de Santalune",
            tipo: "Inseto",
            insignia: "Insígnia: Inseto",
            imagem: "./assets/lideres/viola.png",
            imagemInsignia: "./assets/insignias/inseto-kalos.png",
            cor: "#A6B91A"
        },

        {
            nome: "Grant",
            cidade: "Cidade de Cyllage",
            tipo: "Pedra",
            insignia: "Insígnia: Penhasco",
            imagem: "./assets/lideres/grant.png",
            imagemInsignia: "./assets/insignias/penhasco.png",
            cor: "#B6A136"
        },

        {
            nome: "Korrina",
            cidade: "Cidade de Shalour",
            tipo: "Lutador",
            insignia: "Insígnia: Luta",
            imagem: "./assets/lideres/korrina.png",
            imagemInsignia: "./assets/insignias/luta-kalos.png",
            cor: "#C22E28"
        },

        {
            nome: "Ramos",
            cidade: "Cidade de Coumarine",
            tipo: "Planta",
            insignia: "Insígnia: Planta",
            imagem: "./assets/lideres/ramos.png",
            imagemInsignia: "./assets/insignias/planta-kalos.png",
            cor: "#7AC74C"
        },

        {
            nome: "Clemont",
            cidade: "Cidade de Lumiose",
            tipo: "Elétrico",
            insignia: "Insígnia: Voltagem",
            imagem: "./assets/lideres/clemont.png",
            imagemInsignia: "./assets/insignias/voltagem.png",
            cor: "#F7D02C"
        },

        {
            nome: "Valerie",
            cidade: "Cidade de Laverre",
            tipo: "Fada",
            insignia: "Insígnia: Fada",
            imagem: "./assets/lideres/valerie.png",
            imagemInsignia: "./assets/insignias/fada.png",
            cor: "#D685AD"
        },

        {
            nome: "Olympia",
            cidade: "Cidade de Anistar",
            tipo: "Psíquico",
            insignia: "Insígnia: Psíquica",
            imagem: "./assets/lideres/olympia.png",
            imagemInsignia: "./assets/insignias/psiquica.png",
            cor: "#F95587"
        },

        {
            nome: "Wulfric",
            cidade: "Cidade de Snowbelle",
            tipo: "Gelo",
            insignia: "Insígnia: Icebergue",
            imagem: "./assets/lideres/wulfric.png",
            imagemInsignia: "./assets/insignias/icebergue.png",
            cor: "#96D9D6"
        }
    ]
},

alola: {
        
    regioesPiedade: "ALOLA",
    
    pokemonInicio: 722,
    pokemonFim: 809,
    
    geografiaPiedade: `Alola é uma região tropical formada principalmente por quatro grandes ilhas naturais: Melemele, Akala, 
    Ula'ula e Poni. Cada ilha possui características próprias, com praias, florestas, montanhas, cavernas, áreas vulcânicas e 
    regiões costeiras. <br><br> Além das quatro ilhas principais, a região também possui áreas artificiais, como o Paraíso Aether, 
    construído sobre o oceano. O território de Alola é bastante influenciado pelo mar e pelo clima tropical, apresentando praias, 
    vegetação abundante e áreas montanhosas espalhadas pelas ilhas. <br><br> Essa separação geográfica criou ambientes distintos em 
    cada parte da região, favorecendo diferentes espécies de Pokémon e tornando a exploração de Alola fortemente ligada às viagens 
    entre suas ilhas.`,

    historiaPiedade: `A história de Alola está profundamente ligada aos Pokémon guardiões conhecidos como Tapu, que protegem cada 
    uma das quatro ilhas principais. Durante muitas gerações, os habitantes desenvolveram tradições e cerimônias relacionadas a 
    esses Pokémon, dando origem ao Desafio das Ilhas, uma jornada na qual treinadores enfrentam provas, Capitães e Kahunas. <br><br> 
    A região também possui antigas histórias envolvendo Solgaleo, Lunala e Necrozma, Pokémon relacionados a fenômenos capazes de 
    conectar Alola a outras dimensões através dos Ultra Wormholes. <br><br> Em tempos mais recentes, pesquisas realizadas pela 
    Fundação Aether sobre Ultra Beasts e dimensões alternativas tiveram grande impacto sobre a região, revelando que Alola possui 
    uma ligação incomum com outros mundos e criaturas desconhecidas.`,

    faflPiedade: `A fauna de Alola é especialmente diversa por causa de seu clima tropical e da separação entre suas ilhas. 
    Pokémon podem ser encontrados em praias, florestas, cavernas, vulcões, montanhas, campos e áreas oceânicas. Algumas espécies 
    desenvolveram características próprias após viverem durante muitas gerações no ambiente de Alola, originando as chamadas 
    Formas de Alola. <br><br> A flora apresenta forte presença de palmeiras, árvores tropicais, flores, vegetação costeira e 
    florestas densas. Áreas vulcânicas e montanhosas possuem vegetação diferente das regiões próximas ao litoral. <br><br> A 
    combinação entre isolamento geográfico, clima tropical e diferentes habitats faz de Alola uma região com ecossistemas muito 
    particulares e uma grande variedade de Pokémon.`,

    geografiaImagem: "./assets/regiao/solgaleo.gif",
    historiaImagem: "./assets/regiao/lunala.gif",
    fnflPiedade: "./assets/regiao/necrozma.gif",

    lideres: [

        {
            nome: "Ilima",
            cidade: "Caverna Verdant",
            tipo: "Normal",
            insignia: "Cristal Z: Normalium Z",
            imagem: "./assets/lideres/ilima.png",
            imagemInsignia: "./assets/insignias/normalium-z.png",
            cor: "#A8A77A"
        },

        {
            nome: "Lana",
            cidade: "Brooklet Hill",
            tipo: "Água",
            insignia: "Cristal Z: Waterium Z",
            imagem: "./assets/lideres/lana.png",
            imagemInsignia: "./assets/insignias/waterium-z.png",
            cor: "#6390F0"
        },

        {
            nome: "Kiawe",
            cidade: "Parque Vulcânico Wela",
            tipo: "Fogo",
            insignia: "Cristal Z: Firium Z",
            imagem: "./assets/lideres/kiawe.png",
            imagemInsignia: "./assets/insignias/firium-z.png",
            cor: "#EE8130"
        },

        {
            nome: "Mallow",
            cidade: "Lush Jungle",
            tipo: "Planta",
            insignia: "Cristal Z: Grassium Z",
            imagem: "./assets/lideres/mallow.png",
            imagemInsignia: "./assets/insignias/grassium-z.png",
            cor: "#7AC74C"
        },

        {
            nome: "Sophocles",
            cidade: "Observatório Hokulani",
            tipo: "Elétrico",
            insignia: "Cristal Z: Electrium Z",
            imagem: "./assets/lideres/sophocles.png",
            imagemInsignia: "./assets/insignias/electrium-z.png",
            cor: "#F7D02C"
        },

        {
            nome: "Acerola",
            cidade: "Thrifty Megamart Abandonado",
            tipo: "Fantasma",
            insignia: "Cristal Z: Ghostium Z",
            imagem: "./assets/lideres/acerola.png",
            imagemInsignia: "./assets/insignias/ghostium-z.png",
            cor: "#735797"
        },

        {
            nome: "Mina",
            cidade: "Seafolk Village",
            tipo: "Fada",
            insignia: "Cristal Z: Fairium Z",
            imagem: "./assets/lideres/mina.png",
            imagemInsignia: "./assets/insignias/fairium-z.png",
            cor: "#D685AD"
        },

        {
            nome: "Hala",
            cidade: "Ilha Melemele",
            tipo: "Lutador",
            insignia: "Cristal Z: Fightinium Z",
            imagem: "./assets/lideres/hala.png",
            imagemInsignia: "./assets/insignias/fightinium-z.png",
            cor: "#C22E28"
        },

        {
            nome: "Olivia",
            cidade: "Ilha Akala",
            tipo: "Pedra",
            insignia: "Cristal Z: Rockium Z",
            imagem: "./assets/lideres/olivia.png",
            imagemInsignia: "./assets/insignias/rockium-z.png",
            cor: "#B6A136"
        },

        {
            nome: "Nanu",
            cidade: "Ilha Ula'ula",
            tipo: "Sombrio",
            insignia: "Cristal Z: Darkinium Z",
            imagem: "./assets/lideres/nanu.png",
            imagemInsignia: "./assets/insignias/darkinium-z.png",
            cor: "#705746"
        },

        {
            nome: "Hapu",
            cidade: "Ilha Poni",
            tipo: "Terra",
            insignia: "Cristal Z: Groundium Z",
            imagem: "./assets/lideres/hapu.png",
            imagemInsignia: "./assets/insignias/groundium-z.png",
            cor: "#E2BF65"
        }
    ]
},

galar: {
        
    regioesPiedade: "GALAR",
    
    pokemonInicio: 810,
    pokemonFim: 898,
    
    geografiaPiedade: `Galar é uma região extensa e diversificada, formada por campos, florestas, montanhas, lagos, cavernas 
    e grandes centros urbanos. Seu território se estende principalmente no sentido norte-sul, com pequenas cidades rurais nas 
    regiões mais baixas e grandes áreas industriais e urbanizadas mais ao norte. <br><br> Uma das principais características de 
    Galar é a Área Selvagem, uma vasta região aberta onde diferentes espécies de Pokémon vivem em ambientes variados e onde as 
    condições climáticas podem mudar rapidamente. <br><br> A região também possui áreas cobertas por neve, antigas ruínas, minas 
    e zonas costeiras. Essa combinação entre natureza, cidades modernas e construções históricas cria uma paisagem bastante 
    diversificada e favorece a presença de Pokémon adaptados a diferentes habitats.`,

    historiaPiedade: `A história de Galar está ligada a um antigo acontecimento conhecido como Dia Mais Escuro, ocorrido milhares 
    de anos atrás. Segundo as histórias da região, uma enorme quantidade de energia fez Pokémon crescerem de forma descontrolada, 
    colocando Galar em perigo. <br><br> Zacian e Zamazenta tiveram um papel importante nesse acontecimento e passaram a ser lembrados 
    como heróis lendários. A verdadeira origem do desastre estava relacionada a Eternatus, um Pokémon capaz de produzir enormes 
    quantidades de Energia Dynamax. <br><br> Ao longo do tempo, Galar desenvolveu uma forte cultura de batalhas Pokémon. Os ginásios 
    se transformaram em grandes competições realizadas em estádios, onde líderes enfrentam desafiantes diante de grandes públicos. 
    Atualmente, o Desafio dos Ginásios e a Copa dos Campeões estão entre os eventos mais importantes da região.`,

    faflPiedade: `A fauna de Galar apresenta Pokémon adaptados a campos, florestas, lagos, cavernas, montanhas, regiões nevadas, 
    áreas costeiras e grandes centros urbanos. Algumas espécies que chegaram à região desenvolveram características diferentes 
    ao longo do tempo, originando as chamadas Formas de Galar. <br><br> A flora varia entre extensas áreas gramadas, florestas 
    densas, árvores, flores, vegetação próxima aos rios e plantas resistentes às baixas temperaturas das regiões montanhosas. 
    A Área Selvagem reúne vários desses ambientes em um mesmo território. <br><br> A variedade de climas e paisagens permite que 
    muitas espécies diferentes coexistam em Galar, formando ecossistemas que mudam consideravelmente conforme a localização e 
    as condições climáticas.`,

    geografiaImagem: "./assets/regiao/zacian.gif",
    historiaImagem: "./assets/regiao/zamazenta.gif",
    fnflPiedade: "./assets/regiao/eternatus.gif",

    lideres: [

        {
            nome: "Milo",
            cidade: "Turffield",
            tipo: "Planta",
            insignia: "Insígnia: Planta",
            imagem: "./assets/lideres/milo.png",
            imagemInsignia: "./assets/insignias/planta-galar.png",
            cor: "#7AC74C"
        },

        {
            nome: "Nessa",
            cidade: "Hulbury",
            tipo: "Água",
            insignia: "Insígnia: Água",
            imagem: "./assets/lideres/nessa.png",
            imagemInsignia: "./assets/insignias/agua-galar.png",
            cor: "#6390F0"
        },

        {
            nome: "Kabu",
            cidade: "Motostoke",
            tipo: "Fogo",
            insignia: "Insígnia: Fogo",
            imagem: "./assets/lideres/kabu.png",
            imagemInsignia: "./assets/insignias/fogo-galar.png",
            cor: "#EE8130"
        },

        {
            nome: "Bea / Allister",
            cidade: "Stow-on-Side",
            tipo: "Lutador / Fantasma",
            insignia: "Insígnia: Luta / Fantasma",
            imagem: "./assets/lideres/bea-allister.png",
            imagemInsignia: "./assets/insignias/luta-fantasma.png",
            cor: "#C22E28"
        },

        {
            nome: "Opal",
            cidade: "Ballonlea",
            tipo: "Fada",
            insignia: "Insígnia: Fada",
            imagem: "./assets/lideres/opal.png",
            imagemInsignia: "./assets/insignias/fada-galar.png",
            cor: "#D685AD"
        },

        {
            nome: "Gordie / Melony",
            cidade: "Circhester",
            tipo: "Pedra / Gelo",
            insignia: "Insígnia: Pedra / Gelo",
            imagem: "./assets/lideres/gordie-melony.png",
            imagemInsignia: "./assets/insignias/pedra-gelo.png",
            cor: "#B6A136"
        },

        {
            nome: "Piers",
            cidade: "Spikemuth",
            tipo: "Sombrio",
            insignia: "Insígnia: Sombrio",
            imagem: "./assets/lideres/piers.png",
            imagemInsignia: "./assets/insignias/sombrio.png",
            cor: "#705746"
        },

        {
            nome: "Raihan",
            cidade: "Hammerlocke",
            tipo: "Dragão",
            insignia: "Insígnia: Dragão",
            imagem: "./assets/lideres/raihan.png",
            imagemInsignia: "./assets/insignias/dragao.png",
            cor: "#6F35FC"
        }
    ]
},

hisui: {
        
    regioesPiedade: "HISUI",
    
    pokemonInicio: 899,
    pokemonFim: 905,
    
    geografiaPiedade: `Hisui é uma vasta região de natureza praticamente intocada, formada por extensas planícies, florestas, 
    pântanos, praias, montanhas e áreas permanentemente cobertas por neve. O Monte Coronet ocupa uma posição central no território 
    e pode ser visto de grande parte da região. <br><br> Hisui é dividida em grandes áreas naturais, como Obsidian Fieldlands, 
    Crimson Mirelands, Cobalt Coastlands, Coronet Highlands e Alabaster Icelands. Cada uma apresenta condições ambientais próprias 
    e diferentes espécies de Pokémon. <br><br> A presença humana ainda é relativamente limitada, com pequenos assentamentos e 
    acampamentos espalhados pelo território. Por isso, grande parte de Hisui permanece selvagem, tornando a exploração e o estudo 
    dos Pokémon partes importantes da vida na região.`,

    historiaPiedade: `Hisui representa o território que, muitos anos depois, passaria a ser conhecido como Sinnoh. Durante esse 
    período, humanos e Pokémon ainda não convivem de maneira tão próxima quanto nas épocas futuras, e muitas pessoas demonstram 
    receio diante das criaturas que habitam a região. <br><br> Jubilife Village se torna um importante centro de exploração e 
    pesquisa através da Galaxy Expedition Team, responsável por estudar os Pokémon e registrar informações para a criação de uma 
    das primeiras Pokédex da região. <br><br> Hisui também possui uma forte ligação com antigas lendas envolvendo o chamado 
    Sinnoh Todo-Poderoso, além de Dialga, Palkia, Giratina e Arceus. Os clãs Diamond e Pearl possuem diferentes crenças sobre essas 
    antigas histórias e exercem grande influência sobre a cultura da região.`,

    faflPiedade: `A fauna de Hisui é extremamente diversificada e ocupa ambientes ainda pouco modificados pela presença humana. 
    Pokémon vivem livremente em campos, florestas, pântanos, cavernas, praias, montanhas e regiões congeladas. Algumas espécies 
    desenvolveram características próprias para sobreviver às condições da região, dando origem a formas e evoluções particulares 
    de Hisui. <br><br> A flora varia bastante entre as diferentes áreas, incluindo extensos campos de vegetação, árvores, flores, 
    plantas medicinais, áreas pantanosas e vegetação resistente às baixas temperaturas. <br><br> Como grande parte da região 
    permanece selvagem, os Pokémon exercem um papel fundamental no equilíbrio dos ecossistemas de Hisui e apresentam comportamentos 
    naturais que ainda estão sendo estudados pelos habitantes locais.`,

    geografiaImagem: "./assets/regiao/dialga-origin.gif",
    historiaImagem: "./assets/regiao/palkia-origin.gif",
    fnflPiedade: "./assets/regiao/arceus.gif",

    lideres: [

        {
            nome: "Mai",
            cidade: "Obsidian Fieldlands",
            tipo: "Normal / Psíquico",
            insignia: "Guardião de Wyrdeer",
            imagem: "./assets/lideres/mai.png",
            imagemInsignia: "./assets/insignias/wyrdeer.png",
            cor: "#A8A77A"
        },

        {
            nome: "Lian",
            cidade: "Obsidian Fieldlands",
            tipo: "Inseto / Pedra",
            insignia: "Guardião de Kleavor",
            imagem: "./assets/lideres/lian.png",
            imagemInsignia: "./assets/insignias/kleavor.png",
            cor: "#B6A136"
        },

        {
            nome: "Arezu",
            cidade: "Crimson Mirelands",
            tipo: "Planta / Lutador",
            insignia: "Guardiã de Lilligant",
            imagem: "./assets/lideres/arezu.png",
            imagemInsignia: "./assets/insignias/lilligant-hisui.png",
            cor: "#7AC74C"
        },

        {
            nome: "Calaba",
            cidade: "Crimson Mirelands",
            tipo: "Terra / Normal",
            insignia: "Guardiã de Ursaluna",
            imagem: "./assets/lideres/calaba.png",
            imagemInsignia: "./assets/insignias/ursaluna.png",
            cor: "#E2BF65"
        },

        {
            nome: "Iscan",
            cidade: "Cobalt Coastlands",
            tipo: "Água / Fantasma",
            insignia: "Guardião de Basculegion",
            imagem: "./assets/lideres/iscan.png",
            imagemInsignia: "./assets/insignias/basculegion.png",
            cor: "#6390F0"
        },

        {
            nome: "Palina",
            cidade: "Cobalt Coastlands",
            tipo: "Fogo / Pedra",
            insignia: "Guardiã de Arcanine",
            imagem: "./assets/lideres/palina.png",
            imagemInsignia: "./assets/insignias/arcanine-hisui.png",
            cor: "#EE8130"
        },

        {
            nome: "Melli",
            cidade: "Coronet Highlands",
            tipo: "Elétrico / Planta",
            insignia: "Guardião de Electrode",
            imagem: "./assets/lideres/melli.png",
            imagemInsignia: "./assets/insignias/electrode-hisui.png",
            cor: "#F7D02C"
        },

        {
            nome: "Ingo",
            cidade: "Coronet Highlands",
            tipo: "Lutador / Veneno",
            insignia: "Guardião de Sneasler",
            imagem: "./assets/lideres/ingo.png",
            imagemInsignia: "./assets/insignias/sneasler.png",
            cor: "#C22E28"
        },

        {
            nome: "Sabi",
            cidade: "Alabaster Icelands",
            tipo: "Psíquico / Voador",
            insignia: "Guardiã de Braviary",
            imagem: "./assets/lideres/sabi.png",
            imagemInsignia: "./assets/insignias/braviary-hisui.png",
            cor: "#A98FF3"
        },

        {
            nome: "Gaeric",
            cidade: "Alabaster Icelands",
            tipo: "Gelo / Pedra",
            insignia: "Guardião de Avalugg",
            imagem: "./assets/lideres/gaeric.png",
            imagemInsignia: "./assets/insignias/avalugg-hisui.png",
            cor: "#96D9D6"
        }
    ]
},

paldea: {
        
    regioesPiedade: "PALDEA",
    
    pokemonInicio: 906,
    pokemonFim: 1025,
    
    geografiaPiedade: `Paldea é uma extensa região formada por grandes campos, montanhas, florestas, rios, lagos, praias, 
    cavernas e áreas desérticas. Seu território possui formato aproximadamente circular e é dominado por uma enorme formação 
    localizada no centro da região, conhecida como Grande Cratera de Paldea. <br><br> As cidades e vilarejos estão distribuídos 
    ao redor desse território e são conectados por vastas áreas abertas que permitem explorar a região por diferentes caminhos. 
    Paldea também apresenta regiões de clima bastante variado, incluindo áreas ensolaradas, zonas montanhosas cobertas por neve, 
    regiões áridas e ambientes costeiros. <br><br> Essa diversidade geográfica cria inúmeros habitats naturais e faz de Paldea 
    uma região especialmente adequada para viagens, exploração e estudo de diferentes espécies de Pokémon.`,

    historiaPiedade: `A história de Paldea está profundamente ligada à Grande Cratera localizada no centro da região e à misteriosa 
    Área Zero existente em seu interior. Durante séculos, exploradores tentaram alcançar as profundezas da cratera em busca de 
    criaturas e fenômenos desconhecidos. <br><br> A Academia de Paldea passou a exercer um papel importante no estudo da região, 
    incentivando estudantes a viajar pelo território durante uma atividade conhecida como Caça ao Tesouro. Essas jornadas permitem 
    que treinadores sigam diferentes caminhos, enfrentem ginásios, investiguem Pokémon Titãs e descubram acontecimentos relacionados 
    à Equipe Star. <br><br> Pesquisas realizadas na Área Zero também revelaram Pokémon misteriosos associados a diferentes períodos 
    e possibilidades, além de fenômenos relacionados à Terastalização. Esses acontecimentos transformaram a cratera em um dos locais 
    mais importantes e enigmáticos de Paldea.`,

    faflPiedade: `A fauna de Paldea apresenta uma grande variedade de Pokémon adaptados a campos, florestas, cavernas, desertos, 
    rios, lagos, praias e regiões montanhosas. Algumas espécies possuem diferentes formas ou características dependendo do ambiente, 
    enquanto outras desenvolveram relações particulares com os ecossistemas da região. <br><br> A flora também varia bastante ao 
    longo do território, incluindo grandes áreas gramadas, florestas, flores silvestres, árvores, vegetação costeira e plantas 
    resistentes às regiões mais secas. Nas áreas montanhosas e cobertas por neve, a quantidade de vegetação é consideravelmente 
    menor. <br><br> A combinação de diferentes climas e habitats permite que inúmeras espécies coexistam em Paldea, criando uma 
    região de grande diversidade natural.`,

    geografiaImagem: "./assets/regiao/koraidon.gif",
    historiaImagem: "./assets/regiao/miraidon.gif",
    fnflPiedade: "./assets/regiao/terapagos.gif",

    lideres: [

        {
            nome: "Katy",
            cidade: "Cortondo",
            tipo: "Inseto",
            insignia: "Insígnia: Inseto",
            imagem: "./assets/lideres/katy.png",
            imagemInsignia: "./assets/insignias/inseto-paldea.png",
            cor: "#A6B91A"
        },

        {
            nome: "Brassius",
            cidade: "Artazon",
            tipo: "Planta",
            insignia: "Insígnia: Planta",
            imagem: "./assets/lideres/brassius.png",
            imagemInsignia: "./assets/insignias/planta-paldea.png",
            cor: "#7AC74C"
        },

        {
            nome: "Iono",
            cidade: "Levincia",
            tipo: "Elétrico",
            insignia: "Insígnia: Elétrico",
            imagem: "./assets/lideres/iono.png",
            imagemInsignia: "./assets/insignias/eletrico-paldea.png",
            cor: "#F7D02C"
        },

        {
            nome: "Kofu",
            cidade: "Cascarrafa",
            tipo: "Água",
            insignia: "Insígnia: Água",
            imagem: "./assets/lideres/kofu.png",
            imagemInsignia: "./assets/insignias/agua-paldea.png",
            cor: "#6390F0"
        },

        {
            nome: "Larry",
            cidade: "Medali",
            tipo: "Normal",
            insignia: "Insígnia: Normal",
            imagem: "./assets/lideres/larry.png",
            imagemInsignia: "./assets/insignias/normal-paldea.png",
            cor: "#A8A77A"
        },

        {
            nome: "Ryme",
            cidade: "Montenevera",
            tipo: "Fantasma",
            insignia: "Insígnia: Fantasma",
            imagem: "./assets/lideres/ryme.png",
            imagemInsignia: "./assets/insignias/fantasma-paldea.png",
            cor: "#735797"
        },

        {
            nome: "Tulip",
            cidade: "Alfornada",
            tipo: "Psíquico",
            insignia: "Insígnia: Psíquico",
            imagem: "./assets/lideres/tulip.png",
            imagemInsignia: "./assets/insignias/psiquico-paldea.png",
            cor: "#F95587"
        },

        {
            nome: "Grusha",
            cidade: "Glaseado",
            tipo: "Gelo",
            insignia: "Insígnia: Gelo",
            imagem: "./assets/lideres/grusha.png",
            imagemInsignia: "./assets/insignias/gelo-paldea.png",
            cor: "#96D9D6"
        }
    ]
},

}
const parametros = new URLSearchParams(window.location.search);

const nomeRegiao = parametros.get("regiao") || "kanto";

const regiaoAtual = regioes[nomeRegiao];


/* 
const pokemons = {

    kanto: {
        
        regioesPiedade: "KANTO",
        
        pokemonInicio: 1,
        pokemonFim: 151,
        
    },
}

const parametros = new URLSearchParams(window.location.search);

const nomePokemon = parametros.get("pokemon") || "pikachu";

const pokemonAtual = pokemons[nomePokemon]; */









// Variável 'offset' define a partir de qual Pokémon a API deve começar a buscar (começa no 0)
let offset = regiaoAtual.pokemonInicio - 1;

// Variável 'limit' define quantos Pokémon serão trazidos por vez a cada clique/requisição
let limit = 100;
const ultimoPokemon = regiaoAtual.pokemonFim;


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
        pokemons
    .filter(pokemon =>
        pokemon.id >= regiaoAtual.pokemonInicio &&
        pokemon.id <= regiaoAtual.pokemonFim
    )
    .forEach(pokemon => renderizarCard(pokemon));

    } catch (error) {
        // Se acontecer algum erro na requisição, mostra um alerta na tela
        alert("Deu erro:" + error);
    } finally {
        // Bloco que roda sempre (deu certo ou errado): reativa o botão e atualiza o offset para a próxima página
        botaoPegarDados.disabled = false;
        botaoPegarDados.innerText = 'CARREGAR MAIS...';
        offset += limit; // Soma 10 ao offset para que na próxima vez traga os próximos Pokémon
        if (offset >= regiaoAtual.pokemonFim) {
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
    card.setAttribute("onclick",`abrirPokemon("${pokemon.name}")`);
    const cardDoPokemon = document.getElementById('card-do-pokemon');
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
function abrirPokemon(n){
    localStorage.setItem('pokemonAtual',n);
    window.open('http://127.0.0.1:5500/pokedex/pokemon.html', '_self')
}

// Adiciona um evento de clique no botão para disparar a função de carregar mais Pokémon
botaoPegarDados.addEventListener('click', carregarPokemons);

// Executa a função pela primeira vez assim que a página abre para carregar os primeiros Pokémon
carregarPokemons();

const containerGinasios = document.getElementById("ginasios-cards");

const lideres = regiaoAtual.lideres;

function renderizarGinasios() {

    lideres.forEach(lider => {

        const card = document.createElement("article");

        card.classList.add("card-ginasio");

        card.style.backgroundColor = lider.cor;

        card.innerHTML = `

        <p>${lider.cidade}</p>

        <img
                class="lider-img"
                src="${lider.imagem}"
                alt="${lider.nome}"
            >

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

document.getElementById("regioesPiedade").innerText =
    regiaoAtual.regioesPiedade;

document.getElementById("geografiaPiedade").innerHTML =
    regiaoAtual.geografiaPiedade;

document.getElementById("historiaPiedade").innerHTML =
    regiaoAtual.historiaPiedade;

document.getElementById("faflPiedade").innerHTML =
    regiaoAtual.faflPiedade;

document.getElementById("geografiaImagem").src =
    regiaoAtual.geografiaImagem;

document.getElementById("historiaImagem").src =
    regiaoAtual.historiaImagem;

document.getElementById("fnflPiedad").src =
    regiaoAtual.fnflPiedade;