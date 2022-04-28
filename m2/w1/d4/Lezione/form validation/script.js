let bottone = document.querySelector('#myForm button')

bottone.addEventListener('click', function(){

    event.preventDefault();//prevengo l'invio del form bloccando il comportamento standard del bottone

    let nome = document.querySelector('#nome')
    let password = document.querySelector('#nome').value
    let valid = true

    if(nome.value == ''){
        console.log(nome.nextElementSibling)='Devi inserire il nome'
        valid = false
    }else{    
        nome.nextElementSibling.innerHTML=''
    }
    if(password.value == ''){
        password.nextElementSibling.innerHTML = 'Devi inserire il nome'
        valid = false        
    }else{ 
        password.nextElementSibling.innerHTML=''    
    }

    if(valid){
        //invia il form
    }
})