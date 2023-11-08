(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

let cpf = document.querySelector("#cpf")

cpf.addEventListener('keyup', function (event) {
  if (event.keyCode != 32 && event.keyCode != 46) {
    console.log(cpf.value.length)
    let i = cpf.value.length
    aux = cpf.value
    if (i == 3 || i == 7) {
      cpf.value = aux + "."
    }
    if (i == 11) {
      cpf.value = aux + "-"
    }

  }
})

let cartao = document.querySelector("#cartao")

cartao.addEventListener('keyup', function (event) {
  if (event.keyCode != 32 && event.keyCode != 46) {
    let i = cartao.value.length
    aux = cartao.value
    if (i == 4 || i == 9 || i == 14) {
      cartao.value = aux + " "
    }
  }
})