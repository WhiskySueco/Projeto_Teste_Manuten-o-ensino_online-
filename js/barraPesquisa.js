// Adicione estas linhas ao seu script JavaScript

const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const resultadosPesquisa = document.getElementById("resultadosPesquisa");
    const pesquisaSection = document.querySelector(".pesquisa");

    // Verifica se a barra de pesquisa está vazia
    if (searchbox.trim() === "") {
        // Se estiver vazia, limpa os resultados e exibe apenas a barra de pesquisa
        resultadosPesquisa.innerHTML = "";
        pesquisaSection.style.height = "auto";
        pesquisaSection.classList.remove("active");
        return;
    }

    const storeitems = document.getElementById("menu");
    const cards = storeitems.querySelectorAll(".card");

    resultadosPesquisa.innerHTML = ""; // Limpa o conteúdo dos resultados antes de adicionar novos resultados

    cards.forEach(card => {
        let title = card.querySelector(".card-title");
        let textvalue = title.textContent || title.innerHTML;

        if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
            // Adiciona o conteúdo correspondente aos resultados de pesquisa
            resultadosPesquisa.innerHTML += `
                <div class="card" style="width: 18rem;">
                    ${card.innerHTML}
                </div>`;
        }

        // Exibe ou oculta os cards com base na correspondência da pesquisa
        card.style.display = textvalue.toUpperCase().indexOf(searchbox) > -1 ? "" : "none";
    });

    // Adiciona a classe 'active' para mostrar a seção de pesquisa com resultados
    pesquisaSection.classList.add("active");

    // Ajusta a altura da seção de pesquisa com base nos resultados
    pesquisaSection.style.height = `${resultadosPesquisa.clientHeight}px`;
};
