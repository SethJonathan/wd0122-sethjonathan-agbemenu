let richiesta = new XMLHttpRequest()

richiesta.open('GET', 'https://sofin.wp-admin.it/public/api/v1/user' );

richiesta.onload = function(){
    //console.log(richiesta.response)
}

richiesta.send()//avvio la richiesta

fetch('https://jsonplaceholder.typicode.com/users')
.then(data => data.json())
.then(utenti=>{

    console.log(utenti);
    for(let user of utenti){

        console.log(user)
        let div = document.createElement('div');
        div.innerHTML = user.email

        document.querySelector('#target').append(div)
    }
})

//JSON 

let j= '{"name":"mario","eta":30}'

console.log(JSON.parse(j))//versione trasformata in oggetto

//perconvertire un oggetto in stringa dovrai usare
JSON.stringify