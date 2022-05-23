let a:boolean = true;
let numeroRandom!:any;
let scarto1!:any;
let scarto2!:any;
let giocatore1!:any;
let giocatore2!:any;

while(a){
    for(let i:number=0; i<90; i++){
        numeroRandom = Math.floor(Math.random()*99 + 1);
    }
    alert("Il programma prevede due ipotetici giocatori, che devono indovinare un numero compreso tra 1 e 100 (zero escluso), vince chi dei due giocatori ha azzeccato il numero casuale, e in caso contrario quale dei due si è avvicinato di più al numero.");
    giocatore1= prompt("Giocatore1, azzarda un numero:");
    giocatore2= prompt("Giocatore2, azzarda un numero:");
    if(giocatore1 == numeroRandom){
        alert("Giocatore1 hai indovinato il numero!");
    }else{
        let scarto1:number = Math.floor(numeroRandom - giocatore1);
    }
    if(giocatore2 == numeroRandom){
        alert("Giocatore2 hai indovinato il numero!");
    }else{
        let scarto2:number = Math.floor(numeroRandom - giocatore2);
    }
    if(scarto1 < scarto2){
        alert("Nessuno dei due giocatori ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più ed il numero giusto era il numero " + numeroRandom);    
    }else{
        alert("Nessuno dei due giocatori ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più ed il numero giusto era il numero " + numeroRandom);  
    }
    a = confirm("Vuoi giocare di nuovo?");
}