
        function mostrarEstadoSelecionado() {
            var estadoSelecionado = document.querySelector("#estadoSelect").value;
            var estadoSelecionadoTexto = document.querySelector("#estadoSelect option:checked").text;
            let habilitarBotao = document.querySelector("#idProximo")

            if (estadoSelecionado) {
                document.querySelector("#estadoSelecionado").innerHTML = "<h4>Estado Selecionado: " + estadoSelecionadoTexto + " (" + estadoSelecionado + ")</h4> ";
                habilitarBotao.classList.remove("disabled")
            } else {
                document.querySelector("#estadoSelecionado").innerHTML = "";
            }
        }
  