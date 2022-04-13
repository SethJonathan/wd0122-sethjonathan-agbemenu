let bottone = document.getElementById('bottone')
//bottone.onclick = miaFunzione;

function miaFunzione(){
    return
    console.log('funzione invocata')
}

function trasformaGrassetto(s){
    return '<b>'+s+'</b>'
}
let saluto = 'ciao'
document.write(saluto);
document.write(trasformaGrassetto('Benvenuto') );


function getSomma(){
    return 3 * 4
}


let x = getSomma();
console.log(x);

console.log( getSomma() );

//funzioni parametriche

function getSommaPro(a,b){
    return a + b;
}

function moltiplica(a, b){
    document.write('<br>')
    document.write(a*b)
    return a * b;

}

let res1 = getSommaPro(3,6);
let res2 = getSommaPro(30,65987651);
console.log(res1,res2);

let res3 = moltiplica(res1,res2)
let res4 = moltiplica(3,6);
console.log(res3,res4);

function moltiplica2(a,b,c = 1){//se non darò un valore al parametro c, il suo valore di default sarà 5
    return a*b*c;
}
moltiplica2(2,3)//risultato 2*3*5
moltiplica2(2,3,8)//risultato 2*3*8

function moltiplica3(a,b,c){//se non darò un valore al parametro c, il suo valore di default sarà 5
    let terzoValore = c ||1 
    return a*b*terzoValore;
}

moltiplica3(3,4)//risultato 3*4*1
moltiplica3(3,4,8)//risultato 3*4*8

function moltiplica4(a,b,c){//se non darò un valore al parametro c, il suo valore di default sarà 5
    if(c !=undefined){
        return a*b*c;
    }else{
        return a*b;
    }
}

function moltiplica5(a,b,c){//se non darò un valore al parametro c, il suo valore di default sarà 5
    if(c !=undefined){
        var res = a*b*c;
    }else{
        var res = a*b;
    }
    return res;
}

(
function(){
    console.log('questo log adesso si vedrà') //funzione autoinvocante
}
)()

function saluto2(){

    let s = 'Ciao, '
    function nome(){
        let frase= s + 'Mario'
        return frase;
    }

    return nome();
}

console.log(saluto2());


function saluto3(){

    let s = 'Ciao, '
    function nome(){
        let frase= s + 'Mario'
        return frase;
    }

    return nome();
}

console.log(saluto3));



