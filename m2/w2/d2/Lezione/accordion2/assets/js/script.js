let bottoni = document.querySelectorAll('button')//array

let contents = document.querySelectorAll('.content')//arrayCitta


for(let bottone of bottoni){

    bottone.addEventListener('click',function(){

        let daChiudere = document.querySelector('.content.open')
        
        if(daChiudere != null)
        daChiudere.classList.remove('open')

        let target = bottone.getAttribute('data-target')
        let targetContent = document.querySelector(target)
        if(daChiudere != targetContent){
            document.querySelector(target).classList.toggle('open')
        }
    })
}

