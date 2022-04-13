/*console.log('1');

function f(){
    console.log('funzione');
}


console.log('2')

f()

//scrittura freccia

()=> {

}*/
/*
function f(x){
    console.log(`funzione $(x)`);
}
f(1);


/*
(x)=> {
    console.log(`funzione ${x}`)
}*/
/*
function esegui(fn){
    console.log("Eseguo", fn);
    fn();
}

esegui()

function somma(x, y){
    return x+y
}

var a = 5
var b = 6

console.log(somma(a, b))
console.log(somma(5,6))*/
/*
esegui()=>{
    console.log('Funzione freccia');
}

var func = (z)=>{
    console.log('Funzione func', z);
}

func()
*/


const annoattuale= 2022;

annonascita=prompt('In quale anno sei nato?');
(
function differenza(){
    let eta= annoattuale-annonascita;
    console.log(eta)
    return crescita=eta
}
)()

esegui = () =>{
    return console.log('Funzione freccia');
}

console.log('Funzione freccia');

function descrizione(){

    let s = crescita
    function nome(){
        let frase= 'Luca' + s + "anni"
        return frase;
    }

    return nome();
}

console.log(descrizione)
