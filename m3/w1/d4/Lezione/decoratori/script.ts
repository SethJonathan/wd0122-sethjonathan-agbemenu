function Logger(f:function){

    console.log('...loading');
    console.log(f);

}

@Logger
class Person{
    name:string = 'Max';

    constructor(){
        console.log('Creazione persona')
    }
}

const pers = new Person();

console.log(pers);