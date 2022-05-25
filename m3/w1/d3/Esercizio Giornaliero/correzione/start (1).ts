//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE

abstract class Lavoratore {
    codredd:number
    constructor(cod:number){
        this.codredd = cod
    }
    getUtileTasse():number{
        //reddito annuo lordo * codredd%
        return 0
    }

    abstract getRedditoAnnuoNetto():number
}

//

class Artigiano extends Lavoratore {

    getRedditoAnnuoNetto():number {
        
    }
}
class LiberoProfessionista extends Lavoratore {

    getRedditoAnnuoNetto():number {
        
    }
}
class Commerciante extends Lavoratore {

    getRedditoAnnuoNetto():number {
        
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