const data = new Date();


const d2= new Date(2022, 00, 26, 10, 00, 00, 00);
document.write(data);
console.log("il mio compleanno è il " + d2);

let d = new Date(2022, 3, 26);
let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
console.log("la data in fomrato europeo di oggi è " + `${da}-${mo}-${ye}`);

function f(d){
    let g = d.getDate()
    let m = d.getMonth()+1
    let a = d.getFullYear()
    m = '0' + m;
    m = m.slice(-2)
    if(g > 9){
        g= '0' + g;
    }

    return g + '/' + m + '/' + a
}

let oggi= new Date(2020,3,5)
let fe= f(oggi)
console.log(fe)
