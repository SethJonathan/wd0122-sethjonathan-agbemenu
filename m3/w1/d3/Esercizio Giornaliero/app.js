"use strict";
//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE
class Lavoratore {
    constructor(redditoAnnuo, codRedd, tasseInps, tasseIrpef) {
        this.redditoAnnuo = redditoAnnuo;
        this.codRedd = codRedd;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    getUtileTasse() {
        //reddito annuo lordo * codredd%
        return this.redditoAnnuo * (this.codRedd / 100);
    }
    getTasseIrpef() {
        return this.redditoAnnuo * (this.tasseIrpef / 100);
    }
    getTasseInps() {
        return this.redditoAnnuo * (this.tasseInps / 100);
    }
}
//
class Artigiano extends Lavoratore {
    getRedditoAnnuoNetto() {
        let RedditoAnnuoNetto = this.RedditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse());
        return RedditoAnnuoNetto;
    }
    getTasseInps() {
        let tasseInps = (this.RedditoAnnuo * this.tass);
    }
    getTasseIrpef() {
    }
}
class LiberoProfessionista extends Lavoratore {
    getRedditoAnnuoNetto() {
    }
}
class Commerciante extends Lavoratore {
    getRedditoAnnuoNetto() {
    }
}
let l1 = new Artigiano(10000, 5);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l2 = new LiberoProfessionista(20000, 8);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l3 = new Commerciante(25000, 7);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE
class Lavoratore {
    constructor(cod) {
        this.codredd = cod;
    }
    getUtileTasse() {
        //reddito annuo lordo * codredd%
        return 0;
    }
}
//
class Artigiano extends Lavoratore {
    getRedditoAnnuoNetto() {
    }
}
class LiberoProfessionista extends Lavoratore {
    getRedditoAnnuoNetto() {
    }
}
class Commerciante extends Lavoratore {
    getRedditoAnnuoNetto() {
    }
}
let l1 = new Artigiano(10000, 5);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l2 = new LiberoProfessionista(20000, 8);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l3 = new Commerciante(25000, 7);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
//# sourceMappingURL=app.js.map