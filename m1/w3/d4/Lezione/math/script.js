let x = 1;

console.log(x);

x++
x = x+1
x += 1

x--

console.log(x);
/**
 * arrotondare
 */

let n1 = 5.3;
let n2 = 5.5
let n3 = 5.8
console.log( Math.round(n1) );//arrotonda per eccesso
console.log( Math.round(n2) );//arrotonda per eccesso
console.log( Math.round(n3) );//arrotonda per difetto

console.log(Math.ceil(n1))//arrotonda per eccesso
console.log(Math.ceil(n2))//arrotonda per difetto

//console.log(Math.random()*100)



let ringraziamenti = ['Grazie', 'Grazie Mille', 'Tante grazie', 'wow grazie']
let punteggiatura = [' ','!','!!']
let smyle = [' ',':D',':)']



function generaRandom(arr){
     return Math.floor(Math.random() * arr.length)
}


let rand1 = generaRandom(ringraziamenti)
let rand2 = generaRandom(punteggiatura)
let rand3 = generaRandom(smyle)



let frase = ringraziamenti[rand1] + ' ' + punteggiatura[rand2] + ' ' + smyle[rand3];

console.log(frase);

let target = document.querySelector('#grazie')
target.innerHTML = frase;