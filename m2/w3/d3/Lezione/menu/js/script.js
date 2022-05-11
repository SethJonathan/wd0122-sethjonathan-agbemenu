fetch("json/menu.json")
.then(res => {
    if(res.ok)
    console.log('caricamento completato')
    return res.json()//trasforma la risposta restituendomi il contenuto della pagina del
    //attenzione json() si usa solo se il tipo di dato richiesto è json
    //per gli altri si usa text()
    //questo metodo restituisce una promise
}).then(pizze => {
    console.log(pizze)//è un array
    console.log(pizze[0])//res[0]è un oggetto

    pizze.forEach(pizza => {
        document.write(pizza.gusto + '<br>')
        document.write(pizza.dimensioni[0] + '<br>')
    })
})