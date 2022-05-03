let bottone = document.querySelector('button')

let content = document.querySelector('.content')


for(let bottone of bottoni){

    bottone.addEventListener('click',function(){

        bottone.nextElementSibling.classList.toggle('open')

    })
}

