

function aggiungiNumero(bottone){
    let numero =bottone.innerHTML;
    let display = document.querySelector('#display');
    display.value += numero
}

function risultato(){
    let display = document.querySelector('#display')
    let totale = eval(display.value);
    display.value=totale           
}

function elimina(){
    let display = document.querySelector('#display')
    display.value = display.value.slice(0, -1);
}

function pulisci(){
    let display = document.querySelector('#display')
    display.value ='';
}

function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}


