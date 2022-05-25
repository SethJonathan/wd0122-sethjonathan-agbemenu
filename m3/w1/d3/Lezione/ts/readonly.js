var Test = /** @class */ (function () {
    //public id:number; siccome ho usato readonly tra gli argomenti del costruttore devo eliminare questa riga o me la assegnerà come duplicato
    function Test(name, id) {
        this.id = id;
        this.email = "test@example.com";
        this.name = name;
        this.id = id;
    }
    Test.prototype.checkEmail = function (email) {
        if (this.email == email) {
            throw new Error("Email già esistente");
        }
        this.email = email;
    };
    return Test;
}());
var x = new Test('Giovanna', 1);
x.checkEmail('test@example.com');
console.log(x.id, x.name, x.email);
//x.id = 5; non posso
