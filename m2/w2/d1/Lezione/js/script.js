let next = document.querySelector('next')
next.addEventListener('click',function(){
    history.forward();
})


let prev = document.querySelector('#prev')
prev.addEventListener('click',function(){
    history.back();
})


//posso aggiungere manualmente uno step di navigazione

let card1 = document.querySelector('#card1')
card1.addEventListener('click',function(){
    history.pushState({},'','index.html#card1')
})

