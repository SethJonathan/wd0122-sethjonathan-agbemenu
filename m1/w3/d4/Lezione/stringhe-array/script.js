//metodi

let frase= "La mia pizza preferita è la Diavola";
let indice = frase.indexOf('Diavola');
console.log(indice);
if(indice != -1){
    console.log('trovato');
}else{
    console.log('non trovato')
}

//split e join
frase="La mia pizza preferita è la Diavola";
let arrFrase = frase.split(' ')

console.log(arrFrase);
console.log(arrFrase[0]);

let citta = 'Roma,Milano,Napoli,Firenze';
let arrayCitta = citta.split(',')

console.log(arrayCitta);

let nuovoArrayCitta = ['Roma', 'Milano', 'Napoli', 'Firenze']

let nuovaStringaCitta = nuovoArrayCitta.join()
console.log(nuovaStringaCitta);
