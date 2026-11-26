var chaveGemini = atob("QVEuQWI4Uk42SVVQNUI5ZEZDbUYwZmtiT0xPVXU0cklNNVdaUXYtX0w0ZEVhRXo3bldnRkE=");

        async function buscarPokemon() {
            var input = document.getElementById("campoBusca");
            var texto = input.value.trim();
            var respostaDiv = document.getElementById("respostaIA");

            if (!texto) return;

            if (!texto.includes(" ") && !texto.includes("?") && texto.length < 15) {
                window.location.href = "pokemon.html?nome=" + texto.toLowerCase();
                return;
            }

            respostaDiv.style.display = "block";
            respostaDiv.innerHTML = "Professor Carvalho pensando...";

            try {
                var url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=" + chaveGemini;
                var corpo = {
                    contents: [{ parts: [{ text: texto }] }],
                    systemInstruction: {
                        parts: [{
                            text: "Voce e o Professor Carvalho da Pokedex. Voce so responde perguntas sobre o universo Pokemon. Seja conciso e amigavel em portugues. Se o usuario perguntar algo que NAO seja sobre Pokemon, diga educadamente: 'Desculpe, so posso falar sobre o universo Pokemon!'"
                        }]
                    }
                };

                var resp = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(corpo)
                });

                var dados = await resp.json();
                console.log("Resposta Gemini:", dados);
                if (dados.candidates && dados.candidates[0] && dados.candidates[0].content && dados.candidates[0].content.parts) {
                    var textoResposta = "";
                    for (var i = 0; i < dados.candidates[0].content.parts.length; i++) {
                        if (dados.candidates[0].content.parts[i].text) {
                            textoResposta += dados.candidates[0].content.parts[i].text;
                        }
                    }
                    if (textoResposta) {
                        respostaDiv.innerHTML = "<strong>Professor Carvalho:</strong><br>" + textoResposta.replace(/\n/g, "<br>");
                    } else {
                        respostaDiv.innerHTML = "Nao consegui responder agora, tente novamente!";
                    }
                } else if (dados.error) {
                    respostaDiv.innerHTML = "Aviso: " + dados.error.message;
                } else {
                    respostaDiv.innerHTML = "Nao consegui responder agora, tente novamente!";
                }
            } catch (erro) {
                respostaDiv.innerHTML = "Erro ao conectar com a Pokedex.";
            }
        }

        document.getElementById("campoBusca").addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                buscarPokemon();
            }
        });

// ABRIR E FECHAR O MENU DE TIPOS

const campoTipo = document.getElementById("campoTipo");
const listaTiposMenu = document.getElementById("listaTiposMenu");

if (campoTipo && listaTiposMenu) {

    campoTipo.addEventListener("click", function () {
        listaTiposMenu.classList.toggle("aberta");
    });

    // FECHAR AO CLICAR FORA DO MENU
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".pesquisa-topo")) {
            listaTiposMenu.classList.remove("aberta");
        }
    });

}