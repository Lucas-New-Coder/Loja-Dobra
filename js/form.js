let formbtn = document.querySelector('.submit-btn')
let loader = document.querySelector('.loader')

formbtn.addEventListener('click',()=>{
    let nomeCompleto = document.querySelector('#name') 
    let email = document.querySelector('#email') 
    let senha = document.querySelector('#senha') 
    let zap = document.querySelector('#Whatsapp') 
    let number = document.querySelector('#number') 

    // form validation
    if(nomeCompleto.value.length < 3){
        alert('O nome deve ter pelo menos 3 letras')
    }
})