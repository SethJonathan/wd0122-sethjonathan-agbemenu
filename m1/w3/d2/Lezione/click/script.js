function cambiaSfondo(e){

    //let blocchi = document.getElementsByClassName('blocco')//array di elementi con la classe bolccording
    console.log(e.onclick);
    let colore= e.getAttribute('data-colore');
    console.log(colore);
    //e.style.backgroundColor = colore;

    if(e.style.backgroundColor==''){
        e.style.backgroundColor = colore;
    }else{
        e.style.backgroundColor = '';
    }
}

