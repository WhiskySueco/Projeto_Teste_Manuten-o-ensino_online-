
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

let tel = document.querySelector("#tel")


tel.addEventListener('keyup', function(event){
  if (event.keyCode != 32 && event.keyCode != 46){
    let i = tel.value.length
    aux = tel.value
    console.log(tel.value.length)

    if(i == 0)
    tel.value = aux + "("
  
    if(i == 2)
    tel.value = aux + ")"
  

    if(i == 8)
    tel.value = aux + "-"
  }
})



