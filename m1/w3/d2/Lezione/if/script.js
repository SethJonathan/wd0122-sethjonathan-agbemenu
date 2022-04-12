
let eta = prompt('Quanti anni hai?') || 18;
if(eta >= 18 && eta <=120){
    document.write('sei maggiorenne<br>')
}else if(eta > 120){
    document.write('sei antico...sei un vampiro?<br>')
}else{
    location.href = 'https://it.peppapig.com/'
}

console.log(eta >= 18)

let condizione = true;
if(!condizione){
    document.write('è vera')
}

let anni = 10;

if (anni == 11){
    console.log('vero', anni)
}


let nomi = 'Mario, Giovanni, ';

nomi += 'Carlo';
console.log(nomi);

let conto=5;
conto +=5;
conto +=5;
conto +=5;
conto +=5;
conto +=5;
console.log(conto);

