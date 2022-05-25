//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE

abstract class Lavoratore {
    redditoAnnuo:number
    codRedd:number
    tasseInps:number
    tasseIrpef:number

    constructor(redditoAnnuo:number, codRedd:number, tasseInps:number, tasseIrpef:number){
        this.redditoAnnuo = redditoAnnuo
        this.codRedd = codRedd
        this.tasseInps = tasseInps
        this.tasseIrpef = tasseIrpef
    }
    getUtileTasse():number{
        //reddito annuo lordo * codredd%
        return this.redditoAnnuo * (this.codRedd / 100)
    }
    getTasseIrpef():number{
        return this.redditoAnnuo * (this.tasseIrpef / 100)
    }
    getTasseInps():number{
        return this.redditoAnnuo * (this.tasseInps / 100)
    }



    //getRedditoAnnuoNetto():number{
    //    return this.redditoAnnuo * (this.tasseInps / 100)
    //}

    abstract getIrpef():number
    abstract getInps():number
    abstract getRedditoAnnuoNetto():number
}

//

class Artigiano extends Lavoratore {

    getRedditoAnnuoNetto():number {
        
        let RedditoAnnuoNetto = this.RedditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse())
        return RedditoAnnuoNetto
    }
    getTasseInps(): number {
        let tasseInps = (this.RedditoAnnuo * this.tass)
    }
    getTasseIrpef(): number{

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