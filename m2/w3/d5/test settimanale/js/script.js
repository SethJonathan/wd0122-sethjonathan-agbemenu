
let tabella = document.querySelector('#utenti')

fetch("json/users.json")
.then(res => res.json())
.then(res=> {

    console.log(res)

    for(let utente of res){

        let tr = document.createElement('tr')

        let tdUser = document.createElement('td')
        tdUser.innerHTML = utente.username

        let tdNome = document.createElement('td')
        tdNome.innerHTML = utente.firstName

        let tdCognome = document.createElement('td')
        tdCognome.innerHTML = utente.lastName
        

        let tdGenere = document.createElement('td')
        tdGenere.innerHTML = utente.gender

        let tdEmail = document.createElement('td')
        tdEmail.innerHTML = utente.email

        let tdFoto = document.createElement('td')
        tdFoto.innerHTML = `<img src=" ${utente.profileURL}" width=50px >`

        tr.append(tdUser,tdNome,tdCognome,tdGenere,tdEmail,tdFoto)
        
        tabella.append(tr)
    }
})









