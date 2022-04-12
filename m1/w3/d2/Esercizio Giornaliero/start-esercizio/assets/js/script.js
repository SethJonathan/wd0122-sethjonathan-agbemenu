
var eta = 18;
const SESSO = 'MASCHIO';
let x = 10;
let y = 80;
maggiorenne = false;

let condizione = prompt('sei maggiorenne?')
if(condizione=='si'){
    document.write('Puoi procedere <br>') 
    maggiorenne = true; 
    console.log(maggiorenne)  
}else{
    document.write('Torna indietro <br>')
    console.log(maggiorenne)
}

document.write('il fatto che sei maggiorenne è ' + maggiorenne + '<br>')
console.log(SESSO)
document.write(x+y)