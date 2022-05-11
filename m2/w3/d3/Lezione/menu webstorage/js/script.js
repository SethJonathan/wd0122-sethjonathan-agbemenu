let bottone = document.querySelector('#salva')

bottone.addEventListener('click', function(e){
    e.preventDefault();//blocca l'invio del form
    //se il form viene ricaricato lo script sottostante si blocca


    //1.preparo le variabili dei campi con cui dovrò interagire
    let gusto = document.querySelector('#gusto')
    let tipo = document.querySelector('#tipo')
    let prezzo = document.querySelector('#prezzo')

    let  mini = document.querySelector('#mini')
    let  normale = document.querySelector('#normale')
    let  mezzometro = document.querySelector('#mezzo-metro')

    let disponibile = document.querySelector('#disponibile')

    //2.controllo e preparo i valori dei campi checkbox
    let dimensioni = []//inizializzo l'array per le dimensioni





    if(mini.checked) {
        dimensioni.push(mini.value)
    }
    if(normale.checked) {
        dimensioni.push(mini.value)
    }
    if(mezzoMetro.checked) {
        dimensioni.push(mini.value)
    }

    let pizza = {
        gusto: gusto.value,
        tipo: tipo.value,
        prezzo: prezzo.value,
        dimensioni: dimensioni,
        disponibile: disponibile.checked
    }

    let jsonPizza = JSON.stringify(pizza)

    let pizzeSalvate = localStorage.getItem('pizze')//se non le trova restituisce null

    if(pizzeSalvate !=null){//se trova le pizze
        var db = JSON.parse(pizzeSalvate)//trasfroma la stringa in oggettto js
    }else{
        var db = []
    }    
    
    db.push(pizza)

    let jsonPizze = JSON.stringify(db)
    
    localStorage.setItem('pizze',jsonPizza)
}
)