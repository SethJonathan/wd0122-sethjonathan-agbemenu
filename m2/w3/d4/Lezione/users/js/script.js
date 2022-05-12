const APPURL = 'https://sofin.wp-admin.it/public/api/v1/user'

let tabella = document.querySelector('#utenti')

fetch(APPURL)
.then(res => res.json())
.then(res => {

    console.log(res);

    /**
    let campiVisualizzati = ['id', 'name', 'lastname', 'email', 'role_id']

    let trH = document.createElement('tr')
    for(campo of campiVisualizzati){
        let trH = document.createElement('th')
        th.innerHTML
    }
    */
    /**
    for(let utente of res){
        
        let tr = document.createElement('tr')

        let tdNome = document.createElement('td')
        tdNome.innerHTML = utente.name

        let tdCognome = document.createElement('td')
        tdCognome.innerHTML = utente.lastname
        tr.append(tdNome,tdCognome)


        tabella.append(tr)

    }
    */

    let tdAzioni = document.createElement('td')

    let btnElimina = document.createElement('button')
    btnElimina.innerHTML = 'Elimina'

    btnElimina.addEventListener('click',function(){

        fetch(APPURL+'/'+utente.id, {
            method: 'DELETE'
        })
    })

    tdAzioni.append(btnElimina)
    tr.append(tdAzioni)
    tabella.append(tr)



})
