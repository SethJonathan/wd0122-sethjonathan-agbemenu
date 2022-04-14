let arr = [1, 2, 3, 4]
console.log(arr, arr.length)
console.log([5, 6, 7, 8], [5, 6, 7, 8].length);//posso creare array al volo senza creare una variabile

let pizza = [
    'Margherita',
    'Diavola',
    '4 stagioni'
]

let pizzaDiavola = pizza[1];
console.log(PizzaDiavola);

console.log(pizze);
console.log(pizze[0]) ;

pizze[0] = 'Capricciosa'

console.log( pizze );

let ul = document.querySelector('url')//il primo ul della pagina

console.log(ul.innerHTML);
console.log(ul.innerText);

let li = document.querySelector('ul li:nth-of-type(3)')
console.log(li.innerHTML);

let liAll = document.querySelectorAll('ul li')//array di oggetti 
console.log(liAll[2])

/**
 * Destrutturazione
 */

pizze = [
    'Margherita',
    'Diavola',
    '4 Stagioni'
]

//let [pizza1, pizza2, pizza3]
