"use strict";
class Car {
    constructor(mod, mar, col, p) {
        this.scontoRivenditore = 30;
        this.modello = mod;
        this.marca = mar;
        this.colore = col;
        this.prezzo = p;
    }
    dettagliAuto() {
        return this.modello + " " + this.marca + " " + this.colore;
    }
    set cambiaScontoRivenditore(n) {
        this.scontoRivenditore = n;
    }
    get prezzoFinale() {
        return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100) + '€';
    }
    static nazione() {
        console.log('Italia');
    }
}
Car.stato = 'Italia';
let fiat = new Car('500', 'fiat', 'grigio', 10000);
console.log(fiat.modello);
console.log(fiat.prezzoFinale);
//console.log(fiat.scontoRivenditore) non posso accedere a private e protected
//fiat.scontoRivenditore =20: //non posso accedere alle proprietà protected o private
fiat.cambiaScontoRivenditore = 20; //il metodo setter modifica anche le proprietà con accesso privato o protetto
console.log(fiat.prezzoFinale);
console.log(fiat);
//fiat.nazione();//non posso usarlo così
Car.nazione();
var Months;
(function (Months) {
    Months[Months["Gennaio"] = 1] = "Gennaio";
    Months[Months["Febbraio"] = 2] = "Febbraio";
    Months[Months["Marzo"] = 3] = "Marzo";
    Months[Months["Aprile"] = 4] = "Aprile";
})(Months || (Months = {}));
console.log(Months.Gennaio, Months[1]);
console.log(Months.Aprile);
console.log(Months);
var Color;
(function (Color) {
    Color["Bianco"] = "#fff";
    Color["Nero"] = "#000";
})(Color || (Color = {}));
let colore = Color.Bianco;
//funzioni e oggetti
const states = {
    italy: 'Rome',
    england: 'London',
    id: function () {
        return this.italy + ' ' + this.england;
    }
};
console.log(states.italy, states.england, states.id());
function somma(a, b, c) {
    return a + b;
}
class Veicoli {
    constructor(ruote, marca, modello, prezzo, tipo) {
        this.ruote = ruote;
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.tipo = tipo;
    }
    dettagliVeicolo() {
        return `Modello: ${this.modello}, Marca: ${this.marca}, Ruote: ${this.ruote}`;
    }
}
let apecar = new Veicoli(3, 'Piaggio', '', 1500, 'apecar');
class Cars extends Veicoli {
    constructor(marca, modello, prezzo) {
        super(4, marca, modello, prezzo, 'Automobile');
        this.autoradio = true;
        this.costoPieno = 75;
    }
}
let auto = new Cars('Piaggio', '', 1500);
console.log(auto);
class Bici extends Veicoli {
    constructor(marca, modello, prezzo) {
        super(2, marca, modello, prezzo, 'Bicicletta');
    }
}
class ElectricCars extends Cars {
    cambiaCostoPieno() {
        this.costoPieno = 30;
    }
}
let autoElettrica = new ElectricCars('Fiat', '500 elettrica', 1500);
console.log(autoElettrica);
//# sourceMappingURL=app.js.map