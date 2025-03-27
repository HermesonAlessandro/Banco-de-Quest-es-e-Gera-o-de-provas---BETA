//criando uma lista com perguntas
const perguntas = [
    { pergunta: "Qual é a função principal do Poder Legislativo no Brasil?", opcoes: ["Executar leis", "Criar leis", "Julgar leis"], resposta: "Criar leis" },
    { pergunta: "Qual é o prazo de mandato de um senador no Brasil?", opcoes: ["4 anos", "6 anos", "8 anos"], resposta: "8 anos" },
    { pergunta: "Qual é o órgão responsável por fiscalizar as contas públicas no Brasil?", opcoes: ["Tribunal de Contas da União", "Supremo Tribunal Federal", "Congresso Nacional"], resposta: "Tribunal de Contas da União" },
    { pergunta: "Qual é o princípio fundamental da administração pública que significa agir com honestidade?", opcoes: ["Moralidade", "Eficiência", "Legalidade"], resposta: "Moralidade" },
    { pergunta: "Qual é o maior bioma em extensão territorial no Brasil?", opcoes: ["Amazônia", "Cerrado", "Mata Atlântica"], resposta: "Amazônia" },
    { pergunta: "Qual é o imposto de competência exclusiva dos municípios?", opcoes: ["IPTU", "ICMS", "IPI"], resposta: "IPTU" },
    { pergunta: "Qual é o principal objetivo da Lei de Responsabilidade Fiscal?", opcoes: ["Controlar a inflação", "Garantir a transparência e equilíbrio das contas públicas", "Aumentar a arrecadação"], resposta: "Garantir a transparência e equilíbrio das contas públicas" },
    { pergunta: "Qual é o órgão máximo do Poder Judiciário no Brasil?", opcoes: ["Supremo Tribunal Federal", "Superior Tribunal de Justiça", "Tribunal de Contas da União"], resposta: "Supremo Tribunal Federal" },
    { pergunta: "Qual é o nome do tratado que delimitou as terras entre Portugal e Espanha em 1494?", opcoes: ["Tratado de Tordesilhas", "Tratado de Madri", "Tratado de Utrecht"], resposta: "Tratado de Tordesilhas" },
    { pergunta: "Qual é o nome do processo de transferência de competências da União para estados e municípios?", opcoes: ["Federalismo", "Descentralização", "Regionalização"], resposta: "Descentralização" }
];

//função para mostrar todas as perguntas
function mostrarPerguntas() {
    const container = document.getElementById('container-perguntas');
    container.innerHTML = '';

    perguntas.forEach((item, index) => {
        const divPergunta = document.createElement('div');
        divPergunta.classList.add('pergunta');
        divPergunta.innerHTML = `<h2>${index + 1}. ${item.pergunta}</h2>`; // Adiciona a numeração da pergunta

        if (item.opcoes.length) {
            item.opcoes.forEach(opcao => {
                divPergunta.innerHTML += `
                    <label>
                        <input type="radio" name="pergunta-${index}" value="${opcao}">
                        ${opcao}
                    </label>
                `;
            });
        } else {
            divPergunta.innerHTML += `
                <input type="text" id="resposta-${index}" placeholder="Digite sua resposta">
            `;
        }

        container.appendChild(divPergunta);
    });

    container.innerHTML += `<button onclick="verificarRespostas()">Enviar</button>`;
}

//função para verificar as respostas do usuário
function verificarRespostas() {
    let acertos = 0;

    perguntas.forEach((item, index) => {
        let respostaUsuario;

        if (item.opcoes.length) {
            const selecionado = document.querySelector(`input[name="pergunta-${index}"]:checked`);
            respostaUsuario = selecionado ? selecionado.value : '';
        } else {
            respostaUsuario = document.getElementById(`resposta-${index}`).value.trim();
        }

        if (respostaUsuario.toLowerCase() === item.resposta.toLowerCase()) {
            acertos++;
        }
    });

    alert(`Você acertou ${acertos} de ${perguntas.length} perguntas!`);
}

//mostrar todas as perguntas ao carregar a página
document.addEventListener('DOMContentLoaded', mostrarPerguntas);
