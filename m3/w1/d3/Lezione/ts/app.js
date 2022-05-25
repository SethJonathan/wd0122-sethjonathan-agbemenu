"use strict";
function add(a) {
    return a;
}
let res = add('ciao');
console.log(res);
let res2 = add(654);
console.log(res2);
class CustomArray {
    constructor() {
        this.arr = [];
    }
    getItems() {
        return this.arr;
    }
    addItem(item) {
        this.arr.push(item);
    }
    removeItem(item) {
        let start = this.arr.indexOf(item);
        if (start != -1) {
            this.arr.splice(start, 1);
        }
    }
    removeItem2(item) {
        this.arr = this.arr.filter((i) => i !== item);
    }
}
let array = new CustomArray();
array.addItem('ciao');
array.addItem('ciao2');
array.addItem('ciao3');
array.removeItem2('ciao2');
console.log(array.getItems());
let arrayNum = new CustomArray();
arrayNum.addItem(1);
arrayNum.addItem(2);
arrayNum.addItem(3);
arrayNum.removeItem(2);
console.log(arrayNum.getItems());
class Test {
    //public id:number; siccome ho usato readonly tra gli argomenti del costruttore devo eliminare questa riga o me la assegnerà come duplicato
    constructor(name, id) {
        this.id = id;
        this.email = "test@example.com";
        this.name = name;
        this.id = id;
    }
    checkEmail(email) {
        if (this.email == email) {
            throw new Error("Email già esistente");
        }
        this.email = email;
    }
}
let x = new Test('Giovanna', 1);
x.checkEmail('test1@example.com');
console.log(x.id, x.name, x.email);
//x.id = 5; non posso
//# sourceMappingURL=app.js.map