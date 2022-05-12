const APPURL = 'https://sofin.wp-admin.it/public/api/v1/user'

let bottone = document.querySelector('#newUser button')

bottone.addEventListener('click',function(e){
    e.preventDefault()

    let name = document.querySelector('#name')
    let lastname = document.querySelector('#lastname')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    let role_id = document.querySelector('#role_id')

    let user = {
        name: name.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
        role_id: role_id.value
    }

    fetch(APPURL,{
        method: 'POST',
        headers: { 'Content-Type':'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {

        Swal.fire({
            icon: 'success',
            title: 'Utente creato',
            html: `è stato creato il nuovo utente ${res.name} ${res.lastname} con id ${res.id}`,

        })
    })
})
