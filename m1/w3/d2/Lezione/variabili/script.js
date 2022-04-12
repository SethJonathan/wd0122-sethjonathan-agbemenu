//stringhe ed escape

var saluto = "ciao"
var domanda = "Com'è oggi il tempo?"
var domanda2 = 'Com\'è oggi il tempo?'
var html = '<div class=" blocco"></div>'
var html2 = "<div class=\" blocco\"></div>"


var nome = 'Giovanni'; //valore ipoteticamente definito dall'utente 
var frase = "Ciao" + nome + "come stai?";
var frase2 = `Ciao ${nome} come stai?` //backtick

console.log(frase2,'color:red')
console.log(frase2.length)
console.log( frase2[0] )
var ultimoIndice = frase2.length - 1
//console.log( frase2[ frase2.length - 1 ] );
console.log( frase2[ ultimoIndice ] )

console.log(''.length ); //la lunghezza di un stringa


console.log('%c log colorato', 'color:red;font-size:30px');//come applicare le regole di css ai console-log()

/*
let e const
*/

const PASSWORD = 'NV78943AHTGO7AYGHAOG';
console.log(PASSWORD)
// PASSWORD= 'GMV847TYGH7V83W4' ERRORE
const OBJ = {
    nome: 'Mario'
}

OBJ.nome='marco'// posso modificare le proprietà di un oggetto anche se si trova in una costante
console.log(OBJ)

var x = 1;

{
    console.log(x)
}

let y = 2;
{
    console.log(y)
}

{
    var x2 = 1;
    console.log(x2);
}
console.log(x2);

{
    let y2=2;
    console.log(y2);
}
//console.log(y2); errore: y2 non è definita

function scriviSaluto(){
    var s = 'Ciao'
    document.write(s)
    return s;
}

console.log(scriviSaluto());

scriviSaluto();

/** conversione variabili */

let num = 4;
let testo = '4';
let prezzo = '4€'

console.log(num + testo);//num viene trasformato in stringa
console.log(num * testo);//testo viene trasformato in numero e quindi moltiplicato
console.log(num * prezzo);

let bool = false;
let valore = "<br>il valore della variabile booleana è " + bool +'<br>' ;
document.write(valore)

console.log(num*bool);//se convertito per un numero un valore booleano si transforma in 0 se è false e in 1 se è true.

let booleano = Number(true)
let errore = Number('4a')
let stringa = String(4)
console.log(booleano, errore, stringa)

let arr = ['a', 'b', 'c', 'd', 60]
document.write(arr);// i valori vengono concatenati con una stringa e separati con una virgola

