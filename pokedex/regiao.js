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
                cor: "#B6A136",
                descricao: "Brock é o ex-Líder de Ginásio da Cidade de Pewter e o companheiro de viagem mais duradouro de Ash no anime Pokémon. Especialista no tipo Pedra e parceiro de um Onix, ele atua como o 'irmão mais velho' do grupo devido à sua maturidade e habilidade na cozinha. Seu visual marcante traz os icônicos olhos semicerrados e, como alívio cômico, ele se apaixona por qualquer mulher bonita que vê. Ao longo da jornada, seu objetivo mudou de Criador para Médico Pokémon."
            },
            
            {
                nome: "Misty",
                cidade: "Cidade de Cerulean",
                tipo: "Água",
                insignia: "Insígnia: Cascata",
                imagem: "./assets/lideres/misty.png",
                imagemInsignia: "./assets/insignias/cascata.png",
                cor: "#6390F0",
                descricao: "Misty é a Líder de Ginásio da Cidade de Cerulean e uma das primeiras companheiras de viagem de Ash no anime Pokémon. Especialista no tipo Água, tem Pokémon como Starmie, Staryu e Psyduck. Conhecida por sua personalidade forte, temperamento explosivo e lealdade aos amigos, seu visual marcante inclui cabelos ruivos presos em um rabo de cavalo lateral, regata amarela e shorts vermelhos com suspensórios. Como alívio cômico, vive se irritando com o desajeitado Psyduck. Seu objetivo é se tornar uma grande Mestra Pokémon do tipo Água, conciliando sua jornada com as responsabilidades de Líder de Ginásio."
            },

            {
                nome: "Lt. Surge",
                cidade: "Cidade de Vermilion",
                tipo: "Elétrico",
                insignia: "Insígnia: Trovão",
                imagem: "./assets/lideres/surge.png",
                imagemInsignia: "./assets/insignias/trovao.png",
                cor:"#F7D02C",
                descricao: "Lt. Surge é o Líder de Ginásio da Cidade de Vermilion e especialista no tipo Elétrico, conhecido como o “Relâmpago Americano”. Seu principal parceiro é Raichu, com quem utiliza estratégias baseadas em força e poder elétrico. De aparência musculosa, cabelos loiros e uniforme militar, possui uma personalidade confiante e intimidadora. Inicialmente, acredita que Pokémon evoluídos são superiores, mas sua derrota para Ash e Pikachu demonstra a importância da estratégia, da velocidade e da confiança entre treinador e Pokémon."
                
            },

            {
                nome: "Erika",
                cidade: "Cidade de Celadon",
                tipo: "Planta",
                insignia: "Insígnia: Arco-Íris",
                imagem: "./assets/lideres/erika.png",
                imagemInsignia: "./assets/insignias/arcoiris.png",
                cor:"#7AC74C",
                descricao: "Erika é a Líder de Ginásio da Cidade de Celadon e especialista no tipo Grama. Seus principais Pokémon incluem Gloom e Vileplume. Gentil e elegante, tem paixão por flores e perfumes, administrando sua própria loja de fragrâncias. Seu visual tradicional inclui um quimono verde e cabelos escuros presos. Seu objetivo é aperfeiçoar suas habilidades como treinadora do tipo Grama e continuar cultivando sua paixão pela natureza e pela perfumaria."
                
            },

            {
                nome: "Koga",
                cidade: "Cidade de Fuchsia",
                tipo: "Veneno",
                insignia: "Insígnia: Alma",
                imagem: "./assets/lideres/koga.png",
                imagemInsignia: "./assets/insignias/alma.png",
                cor:"#A33EA1",
                descricao: "Koga é o Líder de Ginásio de Fuchsia e especialista no tipo Veneno no universo Pokémon. Seus principais parceiros incluem Venomoth e Weezing, que utiliza com estratégias baseadas em veneno, agilidade e ataques surpresa. Com aparência de ninja e personalidade disciplinada e estratégica, valoriza a furtividade e o treinamento rigoroso. Seu objetivo é aperfeiçoar suas habilidades ninjas e fortalecer seus Pokémon, mantendo a tradição de sua família, que também é ligada à arte ninja."
            },

            {
                nome: "Sabrina",
                cidade: "Cidade de Saffron",
                tipo: "Psíquico",
                insignia: "Insígnia: Pântano",
                imagem: "./assets/lideres/sabrina.png",
                imagemInsignia: "./assets/insignias/pantano.png",
                cor:"#F95587",
                descricao: "Sabrina é a Líder de Ginásio da Cidade de Saffron e especialista no tipo Psíquico. Sua principal parceira é Alakazam, conhecido por seu enorme poder mental. De personalidade fria e misteriosa, possui habilidades psíquicas que lhe permitem mover objetos e controlar pessoas, além de um visual marcante com cabelos escuros e roupas vermelhas. Seu objetivo é aperfeiçoar seus poderes psíquicos e provar sua superioridade nas batalhas, embora sua jornada também envolva aprender a lidar melhor com suas emoções e com os outros."
            },

            {
                nome: "Blaine",
                cidade: "Ilha Cinnabar",
                tipo: "Fogo",
                insignia: "Insígnia: Vulcão",
                imagem: "./assets/lideres/blaine.png",
                imagemInsignia: "./assets/insignias/vulcao.png",
                cor:"#EE8130",
                descricao: "Blaine é o Líder de Ginásio da Ilha de Cinnabar e especialista no tipo Fogo. Seu principal parceiro é Arcanine, conhecido por sua força e velocidade. De aparência idosa, com cabelos brancos, óculos escuros e personalidade excêntrica, é famoso por seus enigmas e desafios aos treinadores. Seu objetivo é testar as habilidades dos adversários e aperfeiçoar suas estratégias com Pokémon de Fogo, demonstrando seu conhecimento científico e experiência em batalhas."
            },

            {
                nome: "Giovanni",
                cidade: "Cidade de Viridian",
                tipo: "Terra",
                insignia: "Insígnia: Terra",
                imagem: "./assets/lideres/giovanni.png",
                imagemInsignia: "./assets/insignias/terra.png",
                cor:"#E2BF65",
                descricao: "Giovanni é o Líder de Ginásio da Cidade de Viridian e especialista no tipo Terra, além de ser o poderoso chefe da Equipe Rocket. Seu principal parceiro é Persian, e ele também utiliza Pokémon como Rhydon e Nidoking. De personalidade fria, calculista e ambiciosa, possui aparência elegante, cabelos escuros e postura imponente. Seu objetivo é expandir o domínio da Equipe Rocket, utilizando Pokémon para obter poder, riqueza e controle, enquanto mantém sua identidade como Líder de Ginásio."
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
                    cor: "#A98FF3",
                    descricao: "Falkner é o Líder de Ginásio da Cidade de Violet e especialista no tipo Voador no anime Pokémon. Filho de um antigo Líder de Ginásio, ele utiliza Pokémon como Pidgeotto e Pidgeot, destacando-se por suas estratégias aéreas e agilidade nas batalhas. Sua personalidade confiante e disciplinada reflete seu orgulho pela tradição de sua família e sua dedicação ao treinamento. Seu visual marcante inclui cabelos azuis e roupas em tons de azul, inspiradas em aves. Ao longo de sua trajetória, Falkner busca aperfeiçoar suas habilidades como treinador e honrar o legado de seu pai, provando que pode se tornar um grande especialista no tipo Voador."
                },
                
                {
                    nome: "Bugsy",
                    cidade: "Cidade de Azalea",
                    tipo: "Inseto",
                    insignia: "Insígnia: Colmeia",
                    imagem: "./assets/lideres/bugsy.png",
                    imagemInsignia: "./assets/insignias/colmeia.png",
                    cor: "#A6B91A",
                    descricao: "Bugsy é o Líder de Ginásio da Cidade de Azalea e especialista no tipo Inseto. Seus principais Pokémon incluem Scyther, Metapod e Kakuna. Curioso e dedicado, gosta de estudar os Pokémon insetos. Seu objetivo é aprimorar suas estratégias e demonstrar a força desse tipo nas batalhas."
                },

                {
                    nome: "Whitney",
                    cidade: "Cidade de Goldenrod",
                    tipo: "Normal",
                    insignia: "Insígnia: Planície",
                    imagem: "./assets/lideres/whitney.png",
                    imagemInsignia: "./assets/insignias/planicie.png",
                    cor: "#A8A77A",
                    descricao: "Whitney é a Líder de Ginásio da Cidade de Goldenrod e especialista no tipo Normal. Sua principal parceira é Miltank, conhecida pelo poderoso movimento Rollout. Alegre, competitiva e emotiva, possui cabelos castanhos presos em dois coques. Seu objetivo é fortalecer seus Pokémon e se tornar uma treinadora cada vez mais habilidosa."
                },

                {
                    nome: "Morty",
                    cidade: "Cidade de Ecruteak",
                    tipo: "Fantasma",
                    insignia: "Insígnia: Névoa",
                    imagem: "./assets/lideres/morty.png",
                    imagemInsignia: "./assets/insignias/nevoa.png",
                    cor: "#735797",
                    descricao:"Morty é o Líder de Ginásio da Cidade de Ecruteak e especialista no tipo Fantasma no anime Pokémon. Seu principal parceiro é Gengar, além de utilizar outros Pokémon fantasmagóricos. De personalidade tranquila, misteriosa e espiritualizada, possui cabelos roxos e roupas em tons de roxo. Seu objetivo é se tornar um grande especialista no tipo Fantasma e compreender os mistérios dos Pokémon, especialmente os lendários Ho-Oh e as antigas lendas de sua cidade."
                },

                {
                    nome: "Chuck",
                    cidade: "Cidade de Cianwood",
                    tipo: "Lutador",
                    insignia: "Insígnia: Tempestade",
                    imagem: "./assets/lideres/chuck.png",
                    imagemInsignia: "./assets/insignias/tempestade.png",
                    cor: "#C22E28",
                    descricao: "Chuck é o Líder de Ginásio da Cidade de Cianwood e especialista no tipo Lutador no anime Pokémon. Seus principais parceiros incluem Poliwrath e Primeape, conhecidos por sua força física e resistência. De personalidade enérgica e dedicada, é um treinador experiente que valoriza o treinamento rigoroso e a disciplina. Seu objetivo é aprimorar as habilidades de seus Pokémon lutadores e formar combatentes cada vez mais fortes, mantendo sua reputação como um Líder de Ginásio exigente."
                },

                {
                    nome: "Jasmine",
                    cidade: "Cidade de Olivine",
                    tipo: "Aço",
                    insignia: "Insígnia: Mineral",
                    imagem: "./assets/lideres/jasmine.png",
                    imagemInsignia: "./assets/insignias/mineral.png",
                    cor: "#B7B7CE",
                    descricao: "Jasmine é a Líder de Ginásio da Cidade de Olivine e especialista no tipo Aço no anime Pokémon. Sua principal parceira é Steelix, conhecida por sua resistência e força nas batalhas. De personalidade gentil, tímida e cuidadosa, demonstra grande carinho por seus Pokémon e preocupação com os outros. Seu visual marcante inclui longos cabelos castanhos e roupas em tons claros. Seu objetivo é se tornar uma treinadora cada vez mais habilidosa e proteger seus Pokémon, equilibrando suas responsabilidades como Líder de Ginásio com sua natureza bondosa."
                },

                {
                    nome: "Pryce",
                    cidade: "Cidade de Mahogany",
                    tipo: "Gelo",
                    insignia: "Insígnia: Geleira",
                    imagem: "./assets/lideres/pryce.png",
                    imagemInsignia: "./assets/insignias/geleira.png",
                    cor: "#96D9D6",
                    descricao: "Pryce é o Líder de Ginásio da Cidade de Mahogany e especialista no tipo Gelo no anime Pokémon. Seus principais parceiros incluem Piloswine e Dewgong, conhecidos por sua resistência e poder em ambientes gelados. De personalidade séria, disciplinada e experiente, é um treinador veterano que valoriza a perseverança e o treinamento rigoroso. Seu visual marcante inclui cabelos brancos e aparência de um senhor idoso. Seu objetivo é aperfeiçoar suas habilidades como treinador e demonstrar a força dos Pokémon do tipo Gelo, mantendo sua reputação como um dos especialistas mais experientes de Johto."
                },

                {
                    nome: "Clair",
                    cidade: "Cidade de Blackthorn",
                    tipo: "Dragão",
                    insignia: "Insígnia: Nascente",
                    imagem: "./assets/lideres/clair.png",
                    imagemInsignia: "./assets/insignias/nascente.png",
                    cor: "#6F35FC",
                    descricao: "Clair é a Líder de Ginásio da Cidade de Blackthorn e especialista no tipo Dragão no anime Pokémon. Sua principal parceira é Kingdra, conhecida por sua força e habilidade em batalha. De personalidade orgulhosa, determinada e competitiva, ela possui longos cabelos azuis e roupas em tons de azul, com detalhes que remetem aos dragões. Apesar de sua confiança, pode ser teimosa quando é derrotada. Seu objetivo é aperfeiçoar suas habilidades como treinadora de Pokémon do tipo Dragão e honrar a tradição de sua família, ligada ao treinamento desses poderosos Pokémon."
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
            cor: "#B6A136",
            descricao: "Roxanne é a Líder de Ginásio da Cidade de Rustboro e especialista no tipo Pedra no anime Pokémon. Seu principal parceiro é Nosepass, conhecido por sua resistência e defesa. Inteligente, dedicada e estudiosa, ela também atua como professora na Escola de Treinadores Pokémon. Seu visual marcante inclui cabelos azuis curtos e um uniforme escolar. Seu objetivo é aprimorar suas habilidades como treinadora e compartilhar seus conhecimentos sobre Pokémon, inspirando novos treinadores a se tornarem cada vez melhores."
        },
        
        {
            nome: "Brawly",
            cidade: "Cidade de Dewford",
            tipo: "Lutador",
            insignia: "Insígnia: Punho",
            imagem: "./assets/lideres/brawly.png",
            imagemInsignia: "./assets/insignias/punho.png",
            cor: "#C22E28",
            descricao: "Brawly é o Líder de Ginásio da Ilha de Dewford e especialista no tipo Lutador no anime Pokémon. Seu principal parceiro é Hariyama, conhecido por sua força física e resistência. De personalidade energética, descontraída e confiante, é um treinador que gosta de surfar e treinar perto do mar. Seu visual marcante inclui cabelos claros e roupas casuais inspiradas no estilo praiano. Seu objetivo é aperfeiçoar suas habilidades de combate e fortalecer seus Pokémon por meio de treinamentos intensos, buscando se tornar um especialista cada vez mais habilidoso no tipo Lutador."
        },

        {
            nome: "Wattson",
            cidade: "Cidade de Mauville",
            tipo: "Elétrico",
            insignia: "Insígnia: Dínamo",
            imagem: "./assets/lideres/wattson.png",
            imagemInsignia: "./assets/insignias/dinamo.png",
            cor: "#F7D02C",
            descricao:"Wattson é o Líder de Ginásio da Cidade de Mauville e especialista no tipo Elétrico no anime Pokémon. Seu principal parceiro é Manectric, além de utilizar outros Pokémon elétricos em suas batalhas. Alegre, brincalhão e cheio de energia, é um treinador experiente que gosta de testar suas habilidades com desafios divertidos. Seu visual marcante inclui cabelos brancos, bigode volumoso e uma aparência robusta. Seu objetivo é aperfeiçoar suas estratégias e demonstrar o poder dos Pokémon elétricos, mantendo seu Ginásio como um desafio para treinadores de Hoenn."
        },

        {
            nome: "Flannery",
            cidade: "Cidade de Lavaridge",
            tipo: "Fogo",
            insignia: "Insígnia: Calor",
            imagem: "./assets/lideres/flannery.png",
            imagemInsignia: "./assets/insignias/calor.png",
            cor: "#EE8130",
            descricao: "Flannery é a Líder de Ginásio da Cidade de Lavaridge e especialista no tipo Fogo no anime Pokémon. Sua principal parceira é Torkoal, conhecida por sua resistência e poderosas chamas. De personalidade determinada, impulsiva e um pouco insegura devido à sua inexperiência como líder, ela busca provar seu valor nas batalhas. Seu visual marcante inclui cabelos vermelhos presos em um coque alto e roupas em tons de vermelho e preto. Seu objetivo é se tornar uma Líder de Ginásio respeitada, aperfeiçoando suas habilidades e honrando o legado de seu avô."
        },

        {
            nome: "Norman",
            cidade: "Cidade de Petalburg",
            tipo: "Normal",
            insignia: "Insígnia: Equilíbrio",
            imagem: "./assets/lideres/norman.png",
            imagemInsignia: "./assets/insignias/equilibrio.png",
            cor: "#A8A77A",
            descricao: "Norman é o Líder de Ginásio da Cidade de Petalburg e especialista no tipo Normal no anime Pokémon. Seus principais parceiros incluem Slaking e Vigoroth, conhecidos por sua força e resistência. De personalidade séria, disciplinada e dedicada, é também o pai de May e Max, valorizando o equilíbrio entre família e treinamento. Seu visual marcante inclui cabelos castanhos e roupas formais. Seu objetivo é fortalecer seus Pokémon e manter sua reputação como treinador experiente, além de apoiar o desenvolvimento de seus filhos em suas próprias jornadas Pokémon."
        },

        {
            nome: "Winona",
            cidade: "Cidade de Fortree",
            tipo: "Voador",
            insignia: "Insígnia: Pena",
            imagem: "./assets/lideres/winona.png",
            imagemInsignia: "./assets/insignias/pena.png",
            cor: "#A98FF3",
            descricao: "Winona é a Líder de Ginásio da Cidade de Fortree e especialista no tipo Voador no anime Pokémon. Sua principal parceira é Altaria, conhecida por sua elegância e habilidades aéreas. De personalidade calma, graciosa e confiante, demonstra grande conexão com o céu e seus Pokémon. Seu visual marcante inclui longos cabelos azulados e roupas em tons de azul e branco, inspiradas nas aves. Seu objetivo é aperfeiçoar suas estratégias aéreas e fortalecer seus Pokémon, tornando-se uma treinadora cada vez mais habilidosa e respeitada."
        },

        {
            nome: "Tate e Liza",
            cidade: "Cidade de Mossdeep",
            tipo: "Psíquico",
            insignia: "Insígnia: Mente",
            imagem: "./assets/lideres/tate-liza.png",
            imagemInsignia: "./assets/insignias/mente.png",
            cor: "#F95587",
            descricao: "Tate e Liza são os Líderes de Ginásio da Cidade de Mossdeep e especialistas no tipo Psíquico no anime Pokémon. Seus principais parceiros incluem Solrock e Lunatone, que utilizam em batalhas em dupla com estratégias coordenadas. Tate é brincalhão e competitivo, enquanto Liza é mais madura e responsável, formando uma dupla com personalidades complementares. Seus visuais marcantes incluem cabelos azuis e vermelhos, respectivamente, e roupas inspiradas no espaço. Seu objetivo é aperfeiçoar suas habilidades em batalhas duplas e fortalecer a conexão entre seus Pokémon, demonstrando o poder da cooperação e da estratégia."
        },

        {
            nome: "Wallace",
            cidade: "Cidade de Sootopolis",
            tipo: "Água",
            insignia: "Insígnia: Chuva",
            imagem: "./assets/lideres/wallace.png",
            imagemInsignia: "./assets/insignias/chuva.png",
            cor: "#6390F0",
            descricao: "Wallace é um renomado treinador Pokémon que já atuou como Líder de Ginásio da Cidade de Sootopolis e é especialista no tipo Água. Seu principal parceiro é Milotic, conhecido por sua beleza e elegância nas batalhas. De personalidade refinada, confiante e carismática, destaca-se também por seu estilo sofisticado e sua paixão pela beleza dos Pokémon. Seu visual marcante inclui longos cabelos azulados e roupas elegantes. Seu objetivo é aperfeiçoar suas habilidades como treinador e Coordenador Pokémon, buscando reconhecimento tanto pela força em combate quanto pela elegância de suas apresentações."
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
            cor: "#B6A136",
            descricao: "Roark é o Líder de Ginásio da Cidade de Oreburgh e especialista no tipo Pedra no anime Pokémon. Seu principal parceiro é Cranidos, que posteriormente evolui para Rampardos, conhecido por sua força e poder de ataque. De personalidade determinada, trabalhadora e competitiva, também atua como minerador, seguindo os passos de seu pai, Byron. Seu visual marcante inclui cabelos escuros com detalhes azuis e um capacete de mineração. Seu objetivo é se tornar um treinador cada vez mais forte, aperfeiçoando suas habilidades com Pokémon do tipo Pedra e honrando a tradição de sua família na mineração."
        },

        {
            nome: "Gardenia",
            cidade: "Cidade de Eterna",
            tipo: "Planta",
            insignia: "Insígnia: Floresta",
            imagem: "./assets/lideres/gardenia.png",
            imagemInsignia: "./assets/insignias/floresta.png",
            cor: "#7AC74C",
            descricao: "Gardenia é a Líder de Ginásio da Cidade de Eterna e especialista no tipo Grama no anime Pokémon. Sua principal parceira é Roserade, conhecida por sua elegância e força nas batalhas. Alegre, energética e apaixonada pela natureza, demonstra grande entusiasmo por Pokémon do tipo Grama, embora tenha medo de Pokémon do tipo Fantasma. Seu visual marcante inclui cabelos castanhos curtos e roupas em tons de verde e amarelo. Seu objetivo é aperfeiçoar suas habilidades como treinadora e fortalecer seus Pokémon, mostrando todo o potencial do tipo Grama nas batalhas."
        },

        {
            nome: "Maylene",
            cidade: "Cidade de Veilstone",
            tipo: "Lutador",
            insignia: "Insígnia: Pedregulho",
            imagem: "./assets/lideres/maylene.png",
            imagemInsignia: "./assets/insignias/pedregulho.png",
            cor: "#C22E28",
            descricao: "Maylene é a Líder de Ginásio da Cidade de Veilstone e especialista no tipo Lutador no anime Pokémon. Sua principal parceira é Lucario, conhecida por sua força e habilidade em combate. Apesar de ser uma treinadora dedicada e habilidosa, Maylene é insegura e sente muita pressão para corresponder às expectativas de sua posição. Seu visual marcante inclui cabelos azuis curtos e roupas esportivas. Seu objetivo é superar suas inseguranças, aprimorar suas técnicas de batalha e se tornar uma Líder de Ginásio mais confiante, fortalecendo a parceria com seus Pokémon."
        },

        {
            nome: "Crasher Wake",
            cidade: "Cidade de Pastoria",
            tipo: "Água",
            insignia: "Insígnia: Pântano",
            imagem: "./assets/lideres/crasher-wake.png",
            imagemInsignia: "./assets/insignias/pantano-sinnoh.png",
            cor: "#6390F0",
            descricao: "Crasher Wake é o Líder de Ginásio da Cidade de Pastoria e especialista no tipo Água no anime Pokémon. Seus principais parceiros incluem Floatzel, Quagsire e Gyarados, conhecidos por sua força e resistência. De personalidade exuberante, confiante e teatral, é apaixonado por luta livre e costuma agir como um verdadeiro lutador dentro e fora das batalhas. Seu visual marcante inclui uma máscara de lutador, roupa colorida e físico musculoso. Seu objetivo é testar suas habilidades, fortalecer seus Pokémon e proporcionar batalhas emocionantes, demonstrando sua paixão pelo combate e pelo entretenimento."
        },

        {
            nome: "Fantina",
            cidade: "Cidade de Hearthome",
            tipo: "Fantasma",
            insignia: "Insígnia: Relíquia",
            imagem: "./assets/lideres/fantina.png",
            imagemInsignia: "./assets/insignias/reliquia.png",
            cor: "#735797",
            descricao: "Fantina é a Líder de Ginásio da Cidade de Hearthome e especialista no tipo Fantasma no anime Pokémon. Sua principal parceira é Mismagius, conhecida por seus poderes misteriosos e habilidades em batalha. De personalidade elegante, artística e carismática, também é uma talentosa Coordenadora Pokémon, apaixonada por dança e apresentações. Seu visual marcante inclui cabelos roxos, maquiagem destacada e roupas sofisticadas. Seu objetivo é aperfeiçoar suas habilidades como treinadora e artista, combinando estratégias de batalha com sua paixão pela dança e pelo espetáculo."
        },

        {
            nome: "Byron",
            cidade: "Cidade de Canalave",
            tipo: "Aço",
            insignia: "Insígnia: Mina",
            imagem: "./assets/lideres/byron.png",
            imagemInsignia: "./assets/insignias/mina.png",
            cor: "#B7B7CE",
            descricao: "Byron é o Líder de Ginásio da Cidade de Canalave e especialista no tipo Aço no anime Pokémon. Seus principais parceiros incluem Bastiodon e Steelix, conhecidos por sua resistência e poder defensivo. De personalidade séria, confiante e dedicada, também trabalha como minerador e é pai de Roark, compartilhando com ele a paixão por escavações. Seu visual marcante inclui um corpo robusto, cabelos claros e roupas de trabalhador. Seu objetivo é fortalecer seus Pokémon e aperfeiçoar suas estratégias defensivas, mantendo sua reputação como um Líder de Ginásio experiente e honrando sua profissão de minerador."
        },

        {
            nome: "Candice",
            cidade: "Cidade de Snowpoint",
            tipo: "Gelo",
            insignia: "Insígnia: Geleira",
            imagem: "./assets/lideres/candice.png",
            imagemInsignia: "./assets/insignias/geleira-sinnoh.png",
            cor: "#96D9D6",
            descricao: "Candice é a Líder de Ginásio da Cidade de Snowpoint e especialista no tipo Gelo no anime Pokémon. Sua principal parceira é Abomasnow, conhecida por sua força em ambientes gelados. Alegre, energética e dedicada, é uma treinadora determinada que acredita na importância do treinamento e da perseverança. Seu visual marcante inclui cabelos loiros presos em dois rabos de cavalo e roupas de inverno em tons de rosa e branco. Seu objetivo é aperfeiçoar suas habilidades com Pokémon do tipo Gelo e se tornar uma treinadora cada vez mais forte, enfrentando desafios com entusiasmo e confiança."
        },

        {
            nome: "Volkner",
            cidade: "Cidade de Sunyshore",
            tipo: "Elétrico",
            insignia: "Insígnia: Farol",
            imagem: "./assets/lideres/volkner.png",
            imagemInsignia: "./assets/insignias/farol.png",
            cor: "#F7D02C",
            descricao: "Volkner é o Líder de Ginásio da Cidade de Sunyshore e especialista no tipo Elétrico no anime Pokémon. Seu principal parceiro é Luxray, conhecido por sua força e habilidades elétricas. De personalidade séria, reservada e inteligente, é um treinador extremamente habilidoso que perdeu o entusiasmo pelas batalhas por não encontrar adversários à sua altura. Seu visual marcante inclui cabelos loiros espetados e roupas em tons de preto e amarelo. Seu objetivo é recuperar sua paixão pelas batalhas Pokémon, enfrentando treinadores capazes de desafiá-lo e devolvendo a emoção aos combates."
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
            cor: "#7AC74C",
            descricao: "Cilan, Chili e Cress são os Líderes de Ginásio da Cidade de Striaton, especialistas nos tipos Grama, Fogo e Água, respectivamente. Seus principais Pokémon são Pansage, Pansear e Panpour. Irmãos com personalidades distintas, Cilan é analítico, Chili é impulsivo e Cress é calmo. Seu objetivo é aprimorar suas habilidades e testar outros treinadores, enquanto Cilan também busca explorar o mundo Pokémon como especialista."
        },

        {
            nome: "Lenora",
            cidade: "Cidade de Nacrene",
            tipo: "Normal",
            insignia: "Insígnia: Básica",
            imagem: "./assets/lideres/lenora.png",
            imagemInsignia: "./assets/insignias/basica.png",
            cor: "#A8A77A",
            descricao: "Lenora é a Líder de Ginásio da Cidade de Nacrene e especialista no tipo Normal no anime Pokémon. Sua principal parceira é Watchog, conhecida por sua habilidade de usar movimentos estratégicos em batalha. Inteligente, séria e dedicada, também trabalha como paleontóloga e administra um museu, demonstrando grande interesse pela história dos Pokémon. Seu visual marcante inclui cabelos escuros presos e roupas elegantes. Seu objetivo é fortalecer seus Pokémon, compartilhar seus conhecimentos e preservar a história do mundo Pokémon por meio de suas pesquisas."
        },

        {
            nome: "Burgh",
            cidade: "Cidade de Castelia",
            tipo: "Inseto",
            insignia: "Insígnia: Inseto",
            imagem: "./assets/lideres/burgh.png",
            imagemInsignia: "./assets/insignias/inseto.png",
            cor: "#A6B91A",
            descricao: "Burgh é o Líder de Ginásio da Cidade de Castelia e especialista no tipo Inseto no anime Pokémon. Seu principal parceiro é Leavanny, conhecido por sua agilidade e habilidades em batalha. Criativo, alegre e artístico, também é um talentoso pintor que encontra inspiração na natureza e nos Pokémon. Seu visual marcante inclui cabelos verdes e roupas coloridas. Seu objetivo é aperfeiçoar suas habilidades como treinador e artista, explorando a beleza dos Pokémon do tipo Inseto e demonstrando sua força nas batalhas."
        },

        {
            nome: "Elesa",
            cidade: "Cidade de Nimbasa",
            tipo: "Elétrico",
            insignia: "Insígnia: Raio",
            imagem: "./assets/lideres/elesa.png",
            imagemInsignia: "./assets/insignias/raio.png",
            cor: "#F7D02C",
            descricao: "Elesa é a Líder de Ginásio da Cidade de Nimbasa e especialista no tipo Elétrico no anime Pokémon. Sua principal parceira é Zebstrika, conhecida por sua velocidade e poder elétrico. Confiante, carismática e elegante, também é uma famosa modelo que conquista o público com seu estilo e presença marcante. Seu visual inclui longos cabelos loiros e roupas modernas inspiradas na moda. Seu objetivo é fortalecer seus Pokémon e continuar brilhando tanto nas batalhas quanto nas passarelas, equilibrando sua carreira de modelo com suas responsabilidades como Líder de Ginásio."
        },

        {
            nome: "Clay",
            cidade: "Cidade de Driftveil",
            tipo: "Terra",
            insignia: "Insígnia: Terremoto",
            imagem: "./assets/lideres/clay.png",
            imagemInsignia: "./assets/insignias/terremoto.png",
            cor: "#E2BF65",
            descricao: "Clay é o Líder de Ginásio da Cidade de Driftveil e especialista no tipo Terra no anime Pokémon. Seu principal parceiro é Excadrill, conhecido por sua força e habilidade em escavações. De personalidade séria, confiante e pragmática, também atua como empresário do setor de mineração. Seu visual marcante inclui chapéu de cowboy, roupas de fazendeiro e uma postura imponente. Seu objetivo é fortalecer seus Pokémon e manter o sucesso de seus negócios, provando sua experiência tanto nas batalhas quanto no mundo empresarial."
        },

        {
            nome: "Skyla",
            cidade: "Cidade de Mistralton",
            tipo: "Voador",
            insignia: "Insígnia: Jato",
            imagem: "./assets/lideres/skyla.png",
            imagemInsignia: "./assets/insignias/jato.png",
            cor: "#A98FF3",
            descricao: "Skyla é a Líder de Ginásio da Cidade de Mistralton e especialista no tipo Voador no anime Pokémon. Sua principal parceira é Swanna, conhecida por sua agilidade e elegância nos combates. Alegre, confiante e aventureira, também trabalha como piloto de avião, demonstrando sua paixão pelos céus. Seu visual marcante inclui longos cabelos azuis e roupas em tons de azul. Seu objetivo é aperfeiçoar suas habilidades com Pokémon voadores e continuar explorando os céus, equilibrando sua carreira de piloto com suas responsabilidades como Líder de Ginásio."
        },

        {
            nome: "Brycen",
            cidade: "Cidade de Icirrus",
            tipo: "Gelo",
            insignia: "Insígnia: Congelamento",
            imagem: "./assets/lideres/brycen.png",
            imagemInsignia: "./assets/insignias/congelamento.png",
            cor: "#96D9D6",
            descricao: "Brycen é o Líder de Ginásio da Cidade de Icirrus e especialista no tipo Gelo no anime Pokémon. Seus principais parceiros incluem Beartic e Vanillish, conhecidos por sua resistência e poder em ambientes gelados. De personalidade séria, disciplinada e estratégica, também é um antigo ator de filmes de ação, conhecido por interpretar ninjas. Seu visual marcante inclui cabelos escuros e roupas que lembram um traje de combate. Seu objetivo é aperfeiçoar suas habilidades como treinador e enfrentar desafios que exijam estratégia e determinação, mantendo sua dedicação aos Pokémon do tipo Gelo."
        },

        {
            nome: "Drayden / Iris",
            cidade: "Cidade de Opelucid",
            tipo: "Dragão",
            insignia: "Insígnia: Lenda",
            imagem: "./assets/lideres/drayden-iris.png",
            imagemInsignia: "./assets/insignias/lenda.png",
            cor: "#6F35FC",
            descricao: "Drayden é o Líder de Ginásio da Cidade de Opelucid e especialista no tipo Dragão no anime Pokémon. Seu principal parceiro é Haxorus, conhecido por sua força e poder de ataque. Sério, experiente e disciplinado, possui barba branca e aparência imponente. Seu objetivo é formar treinadores habilidosos no tipo Dragão e preservar as tradições de sua cidade, além de orientar Iris em seu desenvolvimento como treinadora. Iris é uma treinadora especialista no tipo Dragão que se torna Líder de Ginásio de Opelucid em algumas versões de Pokémon. Sua principal parceira é Axew, que a acompanha em sua jornada. Alegre, corajosa e aventureira, possui cabelos roxos volumosos e roupas inspiradas na natureza. Seu objetivo é se tornar uma Mestra Pokémon do tipo Dragão, fortalecendo seus Pokémon e aprimorando suas habilidades nas batalhas."
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
            cor: "#A6B91A",
            descricao: "Viola é a Líder de Ginásio da Cidade de Santalune e especialista no tipo Inseto no anime Pokémon. Sua principal parceira é Surskit, além de utilizar Vivillon em suas batalhas. Alegre, confiante e criativa, também trabalha como fotógrafa, registrando imagens de Pokémon e da natureza. Seu visual marcante inclui cabelos loiros curtos e roupas elegantes em tons de azul. Seu objetivo é aperfeiçoar suas habilidades como treinadora e fotógrafa, utilizando sua criatividade e estratégia para superar os desafios das batalhas Pokémon."
        },

        {
            nome: "Grant",
            cidade: "Cidade de Cyllage",
            tipo: "Pedra",
            insignia: "Insígnia: Penhasco",
            imagem: "./assets/lideres/grant.png",
            imagemInsignia: "./assets/insignias/penhasco.png",
            cor: "#B6A136",
            descricao: "Grant é o Líder de Ginásio da Cidade de Cyllage e especialista no tipo Pedra no anime Pokémon. Seus principais parceiros incluem Tyrunt e Amaura, conhecidos por sua resistência e habilidades defensivas. De personalidade calma, confiante e aventureira, é apaixonado por escalada e utiliza essa experiência para desenvolver sua determinação. Seu visual marcante inclui cabelos azuis e roupas esportivas. Seu objetivo é aprimorar suas habilidades como treinador e superar desafios, demonstrando a força dos Pokémon do tipo Pedra e a importância da perseverança."
        },

        {
            nome: "Korrina",
            cidade: "Cidade de Shalour",
            tipo: "Lutador",
            insignia: "Insígnia: Luta",
            imagem: "./assets/lideres/korrina.png",
            imagemInsignia: "./assets/insignias/luta-kalos.png",
            cor: "#C22E28",
            descricao: "Korrina é a Líder de Ginásio da Cidade de Shalour e especialista no tipo Lutador no anime Pokémon. Sua principal parceira é Lucario, com quem possui uma forte conexão e utiliza a Mega Evolução em batalha. Alegre, energética e competitiva, é uma habilidosa patinadora que percorre a cidade sobre seus patins. Seu visual marcante inclui cabelos loiros e roupas esportivas. Seu objetivo é dominar a Mega Evolução e fortalecer sua parceria com Lucario, tornando-se uma treinadora cada vez mais poderosa."
        },

        {
            nome: "Ramos",
            cidade: "Cidade de Coumarine",
            tipo: "Planta",
            insignia: "Insígnia: Planta",
            imagem: "./assets/lideres/ramos.png",
            imagemInsignia: "./assets/insignias/planta-kalos.png",
            cor: "#7AC74C",
            descricao: "Ramos é o Líder de Ginásio da Cidade de Coumarine e especialista no tipo Grama no anime Pokémon. Seu principal parceiro é Gogoat, conhecido por sua força e resistência. De personalidade tranquila, gentil e experiente, é um treinador veterano que valoriza a natureza e o crescimento dos Pokémon. Seu visual marcante inclui longos bigodes brancos, chapéu e roupas tradicionais. Seu objetivo é transmitir sua experiência às novas gerações de treinadores e demonstrar a força dos Pokémon do tipo Grama por meio de batalhas estratégicas."
        },

        {
            nome: "Clemont",
            cidade: "Cidade de Lumiose",
            tipo: "Elétrico",
            insignia: "Insígnia: Voltagem",
            imagem: "./assets/lideres/clemont.png",
            imagemInsignia: "./assets/insignias/voltagem.png",
            cor: "#F7D02C",
            descricao: "Clemont é o Líder de Ginásio da Cidade de Lumiose e especialista no tipo Elétrico no anime Pokémon. Seu principal parceiro é Heliolisk, além de contar com outros Pokémon elétricos. Inteligente, curioso e apaixonado por ciência, é um inventor que cria máquinas e dispositivos tecnológicos, embora suas invenções nem sempre funcionem como esperado. Seu visual marcante inclui cabelos loiros, óculos e uma mochila tecnológica. Seu objetivo é se tornar um treinador mais forte, aprimorar suas invenções e aprender a usar seu conhecimento para ajudar seus amigos e Pokémon."
        },

        {
            nome: "Valerie",
            cidade: "Cidade de Laverre",
            tipo: "Fada",
            insignia: "Insígnia: Fada",
            imagem: "./assets/lideres/valerie.png",
            imagemInsignia: "./assets/insignias/fada.png",
            cor: "#D685AD",
            descricao: "Valerie é a Líder de Ginásio da Cidade de Laverre e especialista no tipo Fada no anime Pokémon. Sua principal parceira é Sylveon, conhecida por sua elegância e habilidades especiais. De personalidade gentil, misteriosa e artística, é apaixonada por moda e trabalha como designer de roupas. Seu visual marcante inclui cabelos rosa, orelhas pontudas e um vestido inspirado em criaturas mágicas. Seu objetivo é fortalecer seus Pokémon e expressar sua criatividade, buscando compreender a ligação entre humanos e Pokémon do tipo Fada."
        },

        {
            nome: "Olympia",
            cidade: "Cidade de Anistar",
            tipo: "Psíquico",
            insignia: "Insígnia: Psíquica",
            imagem: "./assets/lideres/olympia.png",
            imagemInsignia: "./assets/insignias/psiquica.png",
            cor: "#F95587",
            descricao: "Olympia é a Líder de Ginásio da Cidade de Anistar e especialista no tipo Psíquico no anime Pokémon. Seus principais parceiros incluem Meowstic, conhecidos por seus poderes mentais e habilidades estratégicas. De personalidade séria, misteriosa e enigmática, possui habilidades de previsão que lhe permitem enxergar possíveis acontecimentos futuros. Seu visual marcante inclui cabelos roxos compridos e roupas elegantes com detalhes cósmicos. Seu objetivo é aperfeiçoar seus poderes psíquicos e orientar outros treinadores, utilizando sua conexão com o futuro para compreender os mistérios do mundo Pokémon."
        },

        {
            nome: "Wulfric",
            cidade: "Cidade de Snowbelle",
            tipo: "Gelo",
            insignia: "Insígnia: Icebergue",
            imagem: "./assets/lideres/wulfric.png",
            imagemInsignia: "./assets/insignias/icebergue.png",
            cor: "#96D9D6",
            descricao: "Wulfric é o Líder de Ginásio da Cidade de Snowbelle e especialista no tipo Gelo no anime Pokémon. Seu principal parceiro é Avalugg, conhecido por sua enorme resistência e poder defensivo. De personalidade amigável, paciente e experiente, é um treinador que valoriza a perseverança e a força interior. Seu visual marcante inclui corpo robusto, barba e roupas de inverno. Seu objetivo é fortalecer seus Pokémon e ajudar outros treinadores a superar seus limites, demonstrando que a verdadeira força vem da confiança, da determinação e da parceria entre treinador e Pokémon."
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
            cor: "#A8A77A",
            descricao: "Ilima é um Capitão de Prova da Ilha de Melemele e especialista no tipo Normal no anime Pokémon. Seu principal parceiro é Gumshoos. Elegante, inteligente e educado, é conhecido por sua habilidade estratégica e aparência refinada. Seu objetivo é superar desafios e aprimorar suas habilidades como treinador, demonstrando a força dos Pokémon do tipo Normal."
        },

        {
            nome: "Lana",
            cidade: "Brooklet Hill",
            tipo: "Água",
            insignia: "Cristal Z: Waterium Z",
            imagem: "./assets/lideres/lana.png",
            imagemInsignia: "./assets/insignias/waterium-z.png",
            cor: "#6390F0",
            descricao: "Lana é uma Capitã de Prova da Ilha de Akala no anime Pokémon, especialista em Pokémon do tipo Água. Sua principal parceira é Primarina, em algumas fases de sua jornada, além de possuir um forte vínculo com os Pokémon aquáticos. Tranquila, habilidosa e brincalhona, adora pescar e explorar o oceano. Seu objetivo é se tornar uma excelente treinadora de Pokémon do tipo Água e aprimorar suas habilidades nas provas da região de Alola."
        },

        {
            nome: "Kiawe",
            cidade: "Parque Vulcânico Wela",
            tipo: "Fogo",
            insignia: "Cristal Z: Firium Z",
            imagem: "./assets/lideres/kiawe.png",
            imagemInsignia: "./assets/insignias/firium-z.png",
            cor: "#EE8130",
            descricao: "Kiawe é um Capitão de Prova da Ilha de Akala e especialista no tipo Fogo no anime Pokémon. Seu principal parceiro é Marowak de Alola. Sério, dedicado e competitivo, também ajuda sua família na fazenda de dança tradicional. Seu objetivo é se tornar um treinador mais forte, dominar as habilidades dos Pokémon do tipo Fogo e honrar as tradições de sua família."
        },

        {
            nome: "Mallow",
            cidade: "Lush Jungle",
            tipo: "Planta",
            insignia: "Cristal Z: Grassium Z",
            imagem: "./assets/lideres/mallow.png",
            imagemInsignia: "./assets/insignias/grassium-z.png",
            cor: "#7AC74C",
            descricao: "Mallow é uma Capitã de Prova da Ilha de Akala e especialista no tipo Grama no anime Pokémon. Sua principal parceira é Tsareena. Alegre, carinhosa e energética, adora cozinhar e trabalha no restaurante de sua família. Seu objetivo é se tornar uma grande cozinheira e treinadora, usando sua paixão pela natureza e pelos Pokémon para criar pratos especiais e fortalecer seus laços com eles."
        },

        {
            nome: "Sophocles",
            cidade: "Observatório Hokulani",
            tipo: "Elétrico",
            insignia: "Cristal Z: Electrium Z",
            imagem: "./assets/lideres/sophocles.png",
            imagemInsignia: "./assets/insignias/electrium-z.png",
            cor: "#F7D02C",
            descricao: "Sophocles é um Capitão de Prova da Ilha de Melemele e especialista no tipo Elétrico no anime Pokémon. Seu principal parceiro é Togedemaru. Inteligente, curioso e apaixonado por tecnologia, adora robótica e invenções. Seu objetivo é aprimorar seus conhecimentos científicos e se tornar um treinador mais habilidoso, fortalecendo seus Pokémon e usando sua inteligência para superar desafios."
        },

        {
            nome: "Acerola",
            cidade: "Thrifty Megamart Abandonado",
            tipo: "Fantasma",
            insignia: "Cristal Z: Ghostium Z",
            imagem: "./assets/lideres/acerola.png",
            imagemInsignia: "./assets/insignias/ghostium-z.png",
            cor: "#735797",
            descricao: "Acerola é uma Capitã de Prova da Ilha de Ula’ula e especialista no tipo Fantasma no anime Pokémon. Sua principal parceira é Palossand. Alegre, brincalhona e misteriosa, adora histórias assustadoras e possui uma ligação especial com Pokémon fantasmagóricos. Seu objetivo é superar as provas de Alola e aprimorar suas habilidades como treinadora do tipo Fantasma."
        },

        {
            nome: "Mina",
            cidade: "Seafolk Village",
            tipo: "Fada",
            insignia: "Cristal Z: Fairium Z",
            imagem: "./assets/lideres/mina.png",
            imagemInsignia: "./assets/insignias/fairium-z.png",
            cor: "#D685AD",
            descricao: "Mina é uma artista e treinadora da região de Alola no anime Pokémon, conhecida por sua criatividade e talento para a pintura. Sua principal parceira é Ribombee, do tipo Inseto e Fada. Alegre, tranquila e imaginativa, adora criar obras de arte inspiradas no mundo ao seu redor. Seu objetivo é aperfeiçoar sua arte e expressar sua criatividade, mantendo sua ligação com os Pokémon e a cultura de Alola."
        },

        {
            nome: "Hala",
            cidade: "Ilha Melemele",
            tipo: "Lutador",
            insignia: "Cristal Z: Fightinium Z",
            imagem: "./assets/lideres/hala.png",
            imagemInsignia: "./assets/insignias/fightinium-z.png",
            cor: "#C22E28",
            descricao: "Hala é um Kahuna da Ilha de Melemele e especialista no tipo Lutador no anime Pokémon. Seu principal parceiro é Crabrawler, que pode evoluir para Crabominable. Sábio, gentil e experiente, valoriza a tradição e o treinamento disciplinado. Seu objetivo é orientar jovens treinadores e preservar as tradições de Alola, fortalecendo suas habilidades e as de seus Pokémon."
        },

        {
            nome: "Olivia",
            cidade: "Ilha Akala",
            tipo: "Pedra",
            insignia: "Cristal Z: Rockium Z",
            imagem: "./assets/lideres/olivia.png",
            imagemInsignia: "./assets/insignias/rockium-z.png",
            cor: "#B6A136",
            descricao: "Olivia é a Kahuna da Ilha de Akala e especialista no tipo Pedra no anime Pokémon. Sua principal parceira é Lycanroc. Confiante, descontraída e experiente, trabalha como joalheira e é apaixonada por pedras preciosas. Seu objetivo é orientar jovens treinadores e fortalecer seus Pokémon, honrando as tradições da região de Alola."
        },

        {
            nome: "Nanu",
            cidade: "Ilha Ula'ula",
            tipo: "Sombrio",
            insignia: "Cristal Z: Darkinium Z",
            imagem: "./assets/lideres/nanu.png",
            imagemInsignia: "./assets/insignias/darkinium-z.png",
            cor: "#705746",
            descricao: "Nanu é o Kahuna da Ilha de Ula'ula e especialista no tipo Sombrio no anime Pokémon. Seu principal Pokémon é Persian de Alola. Sério, preguiçoso e sarcástico, trabalha como policial e prefere evitar esforços desnecessários. Apesar de sua atitude despreocupada, é um treinador experiente que orienta os desafios da região de Alola."
        },

        {
            nome: "Hapu",
            cidade: "Ilha Poni",
            tipo: "Terra",
            insignia: "Cristal Z: Groundium Z",
            imagem: "./assets/lideres/hapu.png",
            imagemInsignia: "./assets/insignias/groundium-z.png",
            cor: "#E2BF65",
            descricao: "Hapu é a Kahuna da Ilha de Poni e especialista no tipo Terra no anime Pokémon. Sua principal parceira é Mudsdale. Determinada, séria e independente, vive em Poni e dedica-se ao treinamento de seus Pokémon. Seu objetivo é proteger sua ilha e honrar as tradições de Alola, tornando-se uma Kahuna respeitada."
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
            cor: "#7AC74C",
            descricao: "Milo é o Líder de Ginásio de Turffield, na região de Galar, especializado no tipo Grama. Seu principal Pokémon é Eldegoss, conhecido por suas habilidades defensivas. De personalidade gentil, tranquila e determinada, Milo possui um físico forte e costuma demonstrar grande dedicação ao treinamento. Ele trabalha como fazendeiro e valoriza a força e a resistência de seus Pokémon. Seu objetivo é continuar aprimorando suas habilidades como treinador e inspirar outros a reconhecerem o verdadeiro potencial dos Pokémon do tipo Grama."
        },

        {
            nome: "Nessa",
            cidade: "Hulbury",
            tipo: "Água",
            insignia: "Insígnia: Água",
            imagem: "./assets/lideres/nessa.png",
            imagemInsignia: "./assets/insignias/agua-galar.png",
            cor: "#6390F0",
            descricao: "Nessa é a Líder de Ginásio de Hulbury, na região de Galar, especializada no tipo Água. Sua principal parceira é Drednaw, embora seu Pokémon mais característico seja Goldeen? Não, seu principal parceiro em batalhas importantes é Drednaw, e ela também utiliza Pokémon como Goldeen e Arrokuda. De personalidade confiante, determinada e competitiva, Nessa também trabalha como modelo, sendo admirada por sua beleza e elegância. Apesar do sucesso na carreira de modelo, ela leva os combates Pokémon muito a sério. Seu objetivo é aperfeiçoar suas habilidades como treinadora e provar sua força no desafio dos ginásios de Galar."
        },

        {
            nome: "Kabu",
            cidade: "Motostoke",
            tipo: "Fogo",
            insignia: "Insígnia: Fogo",
            imagem: "./assets/lideres/kabu.png",
            imagemInsignia: "./assets/insignias/fogo-galar.png",
            cor: "#EE8130",
            descricao: "Kabu é o Líder de Ginásio de Motostoke, na região de Galar, especializado no tipo Fogo. Seu principal Pokémon é Centiskorch, conhecido por sua força e seus ataques poderosos. De personalidade séria, disciplinada e experiente, Kabu é um treinador veterano que valoriza a perseverança e o treinamento constante. Mesmo sendo muito habilidoso, ele acredita que a dedicação é essencial para alcançar o sucesso. Seu objetivo é continuar aprimorando suas habilidades e inspirar os treinadores mais jovens a nunca desistirem de seus sonhos."
        },

        {
            nome: "Bea / Allister",
            cidade: "Stow-on-Side",
            tipo: "Lutador / Fantasma",
            insignia: "Insígnia: Luta / Fantasma",
            imagem: "./assets/lideres/bea-allister.png",
            imagemInsignia: "./assets/insignias/luta-fantasma.png",
            cor: "#C22E28",
            descricao: "Bea é a Líder de Ginásio de Stow-on-Side, na região de Galar, especializada no tipo Lutador. Sua principal parceira é Machamp. Séria, disciplinada e competitiva, é uma atleta dedicada às artes marciais. Seu objetivo é aperfeiçoar suas habilidades e se tornar uma treinadora cada vez mais forte.  Allister é o Líder de Ginásio de Stow-on-Side em Pokémon Shield, especializado no tipo Fantasma. Seu principal Pokémon é Gengar. Tímido e misterioso, usa uma máscara para esconder o rosto e prefere evitar multidões. Seu objetivo é fortalecer seus Pokémon e aprimorar suas habilidades nas batalhas."
        },

        {
            nome: "Opal",
            cidade: "Ballonlea",
            tipo: "Fada",
            insignia: "Insígnia: Fada",
            imagem: "./assets/lideres/opal.png",
            imagemInsignia: "./assets/insignias/fada-galar.png",
            cor: "#D685AD",
            descricao: "Opal é a Líder de Ginásio de Ballonlea, na região de Galar, especializada no tipo Fada. Sua principal parceira é Alcremie, conhecida por sua aparência delicada e seus poderes especiais. De personalidade excêntrica, elegante e exigente, Opal adora testar os treinadores com perguntas durante os desafios do ginásio. Apesar de seu jeito peculiar, é uma treinadora experiente que busca alguém capaz de sucedê-la. Seu objetivo é encontrar um sucessor digno e preservar a tradição dos Pokémon do tipo Fada."
        },

        {
            nome: "Gordie / Melony",
            cidade: "Circhester",
            tipo: "Pedra / Gelo",
            insignia: "Insígnia: Pedra / Gelo",
            imagem: "./assets/lideres/gordie-melony.png",
            imagemInsignia: "./assets/insignias/pedra-gelo.png",
            cor: "#B6A136",
            descricao: "Gordie é o Líder de Ginásio de Circhester em Pokémon Sword, especializado no tipo Pedra. Seu principal Pokémon é Coalossal. Confiante e competitivo, é filho de Melony e busca se tornar um treinador cada vez mais forte. Melony é a Líder de Ginásio de Circhester em Pokémon Shield, especializada no tipo Gelo. Sua principal parceira é Lapras. Protetora e experiente, valoriza a resistência e a estratégia, buscando demonstrar a força dos Pokémon do tipo Gelo."
        },

        {
            nome: "Piers",
            cidade: "Spikemuth",
            tipo: "Sombrio",
            insignia: "Insígnia: Sombrio",
            imagem: "./assets/lideres/piers.png",
            imagemInsignia: "./assets/insignias/sombrio.png",
            cor: "#705746",
            descricao: "Piers é o Líder de Ginásio de Spikemuth, na região de Galar, especializado no tipo Sombrio. Seu principal Pokémon é Obstagoon. De personalidade séria, rebelde e reservada, é também músico e líder da banda que se apresenta em sua cidade. Apesar de seu jeito durão, Piers se preocupa muito com os moradores e com sua irmã mais nova, Marnie. Seu objetivo é proteger Spikemuth e apoiar sua irmã em sua jornada como treinadora."
        },

        {
            nome: "Raihan",
            cidade: "Hammerlocke",
            tipo: "Dragão",
            insignia: "Insígnia: Dragão",
            imagem: "./assets/lideres/raihan.png",
            imagemInsignia: "./assets/insignias/dragao.png",
            cor: "#6F35FC",
            descricao: "Raihan é o Líder de Ginásio de Hammerlocke, na região de Galar, especializado no tipo Dragão. Seu principal Pokémon é Duraludon, capaz de utilizar a forma Gigantamax. Confiante, competitivo e carismático, Raihan também é conhecido por sua paixão por fotografia e por compartilhar suas experiências nas redes sociais. Apesar de ser um dos treinadores mais fortes de Galar, considera Leon seu maior rival. Seu objetivo é se tornar o campeão da região e superar os desafios que encontra pelo caminho."
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
            cor: "#A8A77A",
            descricao: "Mai é uma das guardiãs das ilhas de Hisui, na região de Hisui, em Pokémon Legends: Arceus. Ela é responsável por cuidar de Wyrdeer, um Pokémon nobre da região. De personalidade séria, responsável e dedicada, Mai demonstra grande respeito pelas tradições e pelos Pokémon. Apesar de seu jeito reservado, preocupa-se com o bem-estar das pessoas e das criaturas que protege. Seu objetivo é preservar o equilíbrio da região e cumprir seus deveres como guardiã."
        },

        {
            nome: "Lian",
            cidade: "Obsidian Fieldlands",
            tipo: "Inseto / Pedra",
            insignia: "Guardião de Kleavor",
            imagem: "./assets/lideres/lian.png",
            imagemInsignia: "./assets/insignias/kleavor.png",
            cor: "#B6A136",
            descricao: "Lian é um dos guardiões das terras de Hisui, em Pokémon Legends: Arceus, responsável por cuidar de Kleavor, um Pokémon nobre do tipo Inseto e Pedra. Jovem, inteligente e dedicado, ele demonstra grande respeito pelas tradições e pelos Pokémon da região. Apesar de sua pouca idade, leva suas responsabilidades muito a sério. Seu objetivo é proteger Kleavor e ajudar a manter o equilíbrio natural de Hisui."
        },

        {
            nome: "Arezu",
            cidade: "Crimson Mirelands",
            tipo: "Planta / Lutador",
            insignia: "Guardiã de Lilligant",
            imagem: "./assets/lideres/arezu.png",
            imagemInsignia: "./assets/insignias/lilligant-hisui.png",
            cor: "#7AC74C",
            descricao: "Arezu é uma integrante do Clã Diamante em Pokémon Legends: Arceus, responsável por cuidar de Lilligant, um Pokémon nobre do tipo Planta e Lutador. De personalidade independente, determinada e trabalhadora, ela também atua como cabeleireira na Vila Jubilife. Apesar de sua confiança, às vezes se preocupa em cumprir suas responsabilidades corretamente. Seu objetivo é proteger Lilligant e ajudar a manter a paz e o equilíbrio na região de Hisui."
        },

        {
            nome: "Calaba",
            cidade: "Crimson Mirelands",
            tipo: "Terra / Normal",
            insignia: "Guardiã de Ursaluna",
            imagem: "./assets/lideres/calaba.png",
            imagemInsignia: "./assets/insignias/ursaluna.png",
            cor: "#E2BF65",
            descricao: "Calaba é uma anciã do Clã Pérola em Pokémon Legends: Arceus, responsável por proteger Ursaluna, um Pokémon nobre do tipo Terra e Normal. De personalidade séria, reservada e tradicional, ela valoriza os costumes de Hisui e demonstra grande respeito pelos Pokémon. Apesar de desconfiar inicialmente do protagonista, aos poucos passa a confiar nele. Seu objetivo é proteger Ursaluna e preservar as tradições de seu clã."
        },

        {
            nome: "Iscan",
            cidade: "Cobalt Coastlands",
            tipo: "Água / Fantasma",
            insignia: "Guardião de Basculegion",
            imagem: "./assets/lideres/iscan.png",
            imagemInsignia: "./assets/insignias/basculegion.png",
            cor: "#6390F0",
            descricao: "Iscan é um dos guardiões do Clã Pérola em Pokémon Legends: Arceus, responsável por cuidar de Basculegion, um Pokémon nobre do tipo Água e Fantasma. De personalidade gentil, tímida e cuidadosa, ele tem medo de Pokémon do tipo Fantasma, apesar de suas responsabilidades. Mesmo assim, demonstra coragem quando precisa ajudar os outros. Seu objetivo é proteger Basculegion e garantir a segurança das pessoas e dos Pokémon da região de Hisui."
        },

        {
            nome: "Palina",
            cidade: "Cobalt Coastlands",
            tipo: "Fogo / Pedra",
            insignia: "Guardiã de Arcanine",
            imagem: "./assets/lideres/palina.png",
            imagemInsignia: "./assets/insignias/arcanine-hisui.png",
            cor: "#EE8130",
            descricao: "Palina é uma guardiã do Clã Pérola em Pokémon Legends: Arceus, responsável por proteger Growlithe de Hisui e seu filhote, que futuramente se torna o Pokémon nobre Arcanine de Hisui. De personalidade gentil, responsável e dedicada, ela vive na Costa dos Cobaltos e valoriza profundamente os Pokémon sob seus cuidados. Apesar de enfrentar dificuldades após perder o antigo Arcanine nobre, demonstra coragem e determinação. Seu objetivo é proteger os Growlithe e honrar a memória de seu antecessor."
        },

        {
            nome: "Melli",
            cidade: "Coronet Highlands",
            tipo: "Elétrico / Planta",
            insignia: "Guardião de Electrode",
            imagem: "./assets/lideres/melli.png",
            imagemInsignia: "./assets/insignias/electrode-hisui.png",
            cor: "#F7D02C",
            descricao: "Melli é um dos guardiões do Clã Diamante em Pokémon Legends: Arceus, responsável por cuidar de Electrode de Hisui, um Pokémon nobre dos tipos Elétrico e Planta. De personalidade arrogante, provocadora e teimosa, gosta de demonstrar sua importância e defender as tradições de seu clã. Apesar de seu comportamento difícil, leva suas responsabilidades a sério. Seu objetivo é proteger Electrode e preservar o equilíbrio da região de Hisui."
        },

        {
            nome: "Ingo",
            cidade: "Coronet Highlands",
            tipo: "Lutador / Veneno",
            insignia: "Guardião de Sneasler",
            imagem: "./assets/lideres/ingo.png",
            imagemInsignia: "./assets/insignias/sneasler.png",
            cor: "#C22E28",
            descricao: "Ingo é um dos guardiões da região de Hisui em Pokémon Legends: Arceus, responsável por orientar os treinadores nas batalhas do Túnel Subterrâneo. Ele também cuida de Sneasler, um Pokémon nobre dos tipos Lutador e Veneno. De personalidade séria, educada e disciplinada, Ingo sofre de amnésia e não se lembra de seu passado. Apesar disso, dedica-se a ajudar os outros e a aprimorar suas habilidades como treinador, buscando encontrar respostas sobre sua origem."
        },

        {
            nome: "Sabi",
            cidade: "Alabaster Icelands",
            tipo: "Psíquico / Voador",
            insignia: "Guardiã de Braviary",
            imagem: "./assets/lideres/sabi.png",
            imagemInsignia: "./assets/insignias/braviary-hisui.png",
            cor: "#A98FF3",
            descricao: "Sabi é uma guardiã do Clã Diamante em Pokémon Legends: Arceus, responsável por cuidar de Braviary de Hisui, um Pokémon nobre dos tipos Psíquico e Voador. Apesar de sua aparência infantil, é esperta, brincalhona e possui habilidades especiais que lhe permitem perceber a presença de outras pessoas. Gosta de testar o protagonista com desafios e enigmas. Seu objetivo é proteger Braviary e ajudar a manter o equilíbrio da região de Hisui."
        },

        {
            nome: "Gaeric",
            cidade: "Alabaster Icelands",
            tipo: "Gelo / Pedra",
            insignia: "Guardião de Avalugg",
            imagem: "./assets/lideres/gaeric.png",
            imagemInsignia: "./assets/insignias/avalugg-hisui.png",
            cor: "#96D9D6",
            descricao: "Gaeric é um dos guardiões do Clã Pérola em Pokémon Legends: Arceus, responsável por cuidar de Avalugg de Hisui, um Pokémon nobre dos tipos Gelo e Pedra. De personalidade forte, corajosa e disciplinada, ele vive nas regiões geladas de Hisui e valoriza a resistência física e o treinamento intenso. Apesar de sua aparência intimidadora, demonstra respeito pelos Pokémon e pelas tradições. Seu objetivo é proteger Avalugg e garantir a segurança da região."
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
            cor: "#A6B91A",
            descricao: "Katy é a Líder de Ginásio de Cortondo, na região de Paldea, especializada no tipo Inseto. Sua principal parceira é Teddiursa, que pode utilizar a Terastalização para assumir o tipo Inseto. De personalidade gentil, trabalhadora e dedicada, Katy é confeiteira e administra sua própria padaria, demonstrando paixão tanto pela culinária quanto pelos Pokémon. Apesar de seu jeito acolhedor, leva os combates muito a sério. Seu objetivo é aperfeiçoar suas habilidades e mostrar a força dos Pokémon do tipo Inseto."
        },

        {
            nome: "Brassius",
            cidade: "Artazon",
            tipo: "Planta",
            insignia: "Insígnia: Planta",
            imagem: "./assets/lideres/brassius.png",
            imagemInsignia: "./assets/insignias/planta-paldea.png",
            cor: "#7AC74C",
            descricao: "Brassius é o Líder de Ginásio de Artazon, na região de Paldea, especializado no tipo Planta. Seu principal Pokémon é Sudowoodo, que pode utilizar a Terastalização para assumir o tipo Planta. De personalidade artística, expressiva e dedicada, Brassius trabalha como escultor e utiliza Pokémon como inspiração para suas obras. Conhecido como o “Verdejante Verossímil”, busca expressar emoções por meio da arte e das batalhas. Seu objetivo é aperfeiçoar suas criações artísticas e demonstrar a força dos Pokémon do tipo Planta."
        },

        {
            nome: "Iono",
            cidade: "Levincia",
            tipo: "Elétrico",
            insignia: "Insígnia: Elétrico",
            imagem: "./assets/lideres/iono.png",
            imagemInsignia: "./assets/insignias/eletrico-paldea.png",
            cor: "#F7D02C",
            descricao: "Iono é a Líder de Ginásio de Levincia, na região de Paldea, especializada no tipo Elétrico. Sua principal parceira é Bellibolt, conhecido por sua aparência arredondada e habilidades elétricas. Alegre, energética e carismática, Iono é uma influenciadora digital e apresentadora de transmissões ao vivo, conhecida como a “Influenciadora Elétrica”. Ela adora interagir com seus fãs e transformar suas batalhas em grandes espetáculos. Seu objetivo é conquistar popularidade e mostrar a força dos Pokémon do tipo Elétrico."
        },

        {
            nome: "Kofu",
            cidade: "Cascarrafa",
            tipo: "Água",
            insignia: "Insígnia: Água",
            imagem: "./assets/lideres/kofu.png",
            imagemInsignia: "./assets/insignias/agua-paldea.png",
            cor: "#6390F0",
            descricao: "Kofu é o Líder de Ginásio de Cascarrafa, na região de Paldea, especializado no tipo Água. Seu principal Pokémon é Crabominable, que pode utilizar a Terastalização para assumir o tipo Água. De personalidade alegre, descontraída e generosa, Kofu é um chef de cozinha apaixonado por ingredientes e pela culinária. Apesar de seu jeito divertido e distraído, é um treinador experiente que leva as batalhas a sério. Seu objetivo é fortalecer seus Pokémon e compartilhar sua paixão pela culinária com as pessoas de Paldea."
        },

        {
            nome: "Larry",
            cidade: "Medali",
            tipo: "Normal",
            insignia: "Insígnia: Normal",
            imagem: "./assets/lideres/larry.png",
            imagemInsignia: "./assets/insignias/normal-paldea.png",
            cor: "#A8A77A",
            descricao: "Larry é o Líder de Ginásio de Medali, na região de Paldea, especializado no tipo Normal. Seu principal Pokémon é Dudunsparce, que pode utilizar a Terastalização para assumir o tipo Normal. De personalidade séria, reservada e aparentemente cansada, Larry é um trabalhador dedicado que também atua como membro da Elite dos Quatro, especializado no tipo Voador. Apesar de sua rotina exigente, demonstra grande habilidade e profissionalismo nas batalhas. Seu objetivo é cumprir suas responsabilidades e mostrar que até os Pokémon mais comuns podem ser poderosos."
        },

        {
            nome: "Ryme",
            cidade: "Montenevera",
            tipo: "Fantasma",
            insignia: "Insígnia: Fantasma",
            imagem: "./assets/lideres/ryme.png",
            imagemInsignia: "./assets/insignias/fantasma-paldea.png",
            cor: "#735797",
            descricao: "Ryme é a Líder de Ginásio de Montenevera, na região de Paldea, especializada no tipo Fantasma. Sua principal parceira é Toxtricity, que pode utilizar a Terastalização para assumir o tipo Fantasma. De personalidade confiante, energética e carismática, Ryme é uma rapper famosa que combina música e batalhas Pokémon em seus espetáculos. Ela valoriza o ritmo, a criatividade e a conexão com seus Pokémon. Seu objetivo é animar o público por meio da música e demonstrar a força dos Pokémon do tipo Fantasma."
        },

        {
            nome: "Tulip",
            cidade: "Alfornada",
            tipo: "Psíquico",
            insignia: "Insígnia: Psíquico",
            imagem: "./assets/lideres/tulip.png",
            imagemInsignia: "./assets/insignias/psiquico-paldea.png",
            cor: "#F95587",
            descricao: "Tulip é a Líder de Ginásio de Alfornada, na região de Paldea, especializada no tipo Psíquico. Sua principal parceira é Florges, que pode utilizar a Terastalização para assumir o tipo Psíquico. Elegante, confiante e vaidosa, Tulip trabalha como modelo e especialista em beleza, valorizando a aparência e a determinação. Apesar de seu jeito exigente, é uma treinadora habilidosa que leva os combates a sério. Seu objetivo é aperfeiçoar suas habilidades e demonstrar o poder dos Pokémon do tipo Psíquico."
        },

        {
            nome: "Grusha",
            cidade: "Glaseado",
            tipo: "Gelo",
            insignia: "Insígnia: Gelo",
            imagem: "./assets/lideres/grusha.png",
            imagemInsignia: "./assets/insignias/gelo-paldea.png",
            cor: "#96D9D6",
            descricao: "Grusha é o Líder de Ginásio de Glaseado, na região de Paldea, especializado no tipo Gelo. Seu principal Pokémon é Cetitan, que pode utilizar a Terastalização para assumir o tipo Gelo. De personalidade séria, reservada e exigente, Grusha foi um snowboarder profissional antes de se tornar Líder de Ginásio. Após sofrer uma lesão que encerrou sua carreira esportiva, passou a dedicar-se às batalhas Pokémon. Seu objetivo é testar a determinação dos treinadores e provar que a perseverança é essencial para superar desafios."
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
function abrirPokemon(nome){
    window.open(`http://127.0.0.1:5500/pokedex/pokemon.html?nome=${nome}`, '_self');
}

// Adiciona um evento de clique no botão para disparar a função de carregar mais Pokémon
botaoPegarDados.addEventListener('click', carregarPokemons);

// Executa a função pela primeira vez assim que a página abre para carregar os primeiros Pokémon
carregarPokemons();

const containerGinasios = document.getElementById("ginasios-cards");

const lideres = regiaoAtual.lideres;

function mostrarDescricao(texto, card, lider){
    if(card.classList.contains('virado')){
        card.innerHTML = `
        <p>${lider.cidade}</p>
        <img class="lider-img" src="${lider.imagem}"alt="${lider.nome}" >
            <h2>${lider.nome}</h2>
            <p>Tipo: ${lider.tipo}</p>
            <img class="insignia-img" src="${lider.imagemInsignia}" alt="${lider.insignia}">
            <p>${lider.insignia}</p>
            `;
        card.classList.remove('virado');
        return;
    }

    card.classList.toggle('virado');
    card.innerHTML = `
    <p class='descricao-do-lider'>${texto}</p>
    `
}
function renderizarGinasios() {

    lideres.forEach(lider => {

        const card = document.createElement("article");
        card.addEventListener('click', () => mostrarDescricao(lider.descricao, card, lider));

        card.classList.add("card-ginasio-front");

        card.style.backgroundColor = lider.cor;

        card.innerHTML = `
        <p>${lider.cidade}</p>
        <img class="lider-img" src="${lider.imagem}"alt="${lider.nome}" >
            <h2>${lider.nome}</h2>
            <p>Tipo: ${lider.tipo}</p>
            <img class="insignia-img" src="${lider.imagemInsignia}" alt="${lider.insignia}">
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