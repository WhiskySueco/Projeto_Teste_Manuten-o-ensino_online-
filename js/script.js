let lista = document.querySelector("#listas")

async function carregarDados(){
    const url ="https://run.mocky.io/v3/f5dfb6ac-983a-4e5c-a8e0-27de665663e7"

    const resultado = await fetch(url)

    const dados = await resultado.json()

    console.log(dados)

    for(const itens of dados){
        const divizera = document.createElement("div")
        const linha1 = document.createElement("button")
        const linha2 = document.createElement("button")
        const linha3 = document.createElement("button")
        const linha4 = document.createElement("button")
        const linha5 = document.createElement("button")
        
        const linha6 = document.createElement("span")
        const linha7 = document.createElement("span")
        const linha8 = document.createElement("span")
        const linha9 = document.createElement("span")


        divizera.classList.add("col-lg-4","col-md-6", "list-group")
        linha1.classList.add("list-group-item", "list-group-item-action", "active", "fw-bold")
        linha2.classList.add("list-group-item", "list-group-item-action")
        linha3.classList.add("list-group-item", "list-group-item-action")
        linha4.classList.add("list-group-item", "list-group-item-action")
        linha5.classList.add("list-group-item", "list-group-item-action")

        linha6.classList.add("fw-bold")
        linha7.classList.add("fw-bold")
        linha8.classList.add("fw-bold")
        linha9.classList.add("fw-bold")

        linha1.textContent = itens.nome_escola
        linha2.textContent = itens.descrição_resumida
        linha3.textContent = itens.endereço
        linha4.textContent = itens.telefone
        linha5.textContent = itens.email

        linha6.textContent ="Descrição: "
        linha7.textContent = "Endereço: "
        linha8.textContent = "Telefone: "
        linha9.textContent = "Email: "

        divizera.appendChild(linha1)
        divizera.appendChild(linha2)
        divizera.appendChild(linha3)
        divizera.appendChild(linha4)
        divizera.appendChild(linha5)

        linha2.prepend(linha6)
        linha3.prepend(linha7)
        linha4.prepend(linha8)
        linha5.prepend(linha9)
      

        lista.appendChild(divizera)
    }
}

carregarDados()