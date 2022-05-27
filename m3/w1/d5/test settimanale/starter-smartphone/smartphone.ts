//interfaccia smarthpone per la ricarica
interface ISmartphone{
    //interfaccia che applico alle classi
    carica:number;
    numeroChiamate:number;
    costoMin:number;
    //ricarica(unaRicarica:number):void;
    //chiamata(minutiDurata:number):void;
}

//primo utente
class FirstUser implements ISmartphone{

    public costoMin:number = 0.20
    public carica:number;
    public numeroChiamate:number= 0
    public costoChiamata:number=0

    constructor(carica:number){
        this.carica = carica;

    }

    public ricarica(unaRicarica:number):void{
        this.carica += unaRicarica
        console.log(`Il cliente ha effettuato una ricarica di ${unaRicarica}€, Credito residuo: ${this.carica}€`)
    }
    public chiamata(minutiDurata:number):void{
        let costoChiamata = minutiDurata*this.costoMin
        if (this.carica >= this.costoMin){
            this.carica -= costoChiamata
            this.numeroChiamate++
        }else{
            console.log(`Credito insufficiente per la telefonata, il credito residuo è: ${this.carica}€`)
        }

        
        
        
    }
    public numero404():number{
        console.log(`Credito residuo è ${this.carica}`)
        return this.carica
    }
    public getNumeroChiamate():number{

        return this.numeroChiamate
    }
    public azzeraChiamate():void{
        this.numeroChiamate = 0
    }
}

//secondo utente
class SecondUser implements ISmartphone{

    public costoMin:number = 0.20
    public carica:number;
    public numeroChiamate:number= 0
    public costoChiamata:number=0

    constructor(carica:number){
        this.carica = carica;

    }

    public ricarica(unaRicarica:number):void{
        this.carica += unaRicarica
        console.log(`Il cliente ha effettuato una ricarica di ${unaRicarica}€, Credito residuo: ${this.carica}€`)
    }
    public chiamata(minutiDurata:number):void{
        let costoChiamata = minutiDurata*this.costoMin
        if (this.carica >= this.costoMin){
            this.carica -= costoChiamata
            this.numeroChiamate++
        }else{
            console.log(`Credito insufficiente per la telefonata, il credito residuo è: ${this.carica}€`)
        }

        
        
        
    }
    public numero404():number{
        console.log(`Credito residuo è ${this.carica}`)
        return this.carica
    }
    public getNumeroChiamate():number{

        return this.numeroChiamate
    }
    public azzeraChiamate():void{
        this.numeroChiamate = 0
    }
}

//terzo utente
class ThirdUser implements ISmartphone{

    public costoMin:number = 0.20
    public carica:number;
    public numeroChiamate:number= 0
    public costoChiamata:number=0

    constructor(carica:number){
        this.carica = carica;

    }

    public ricarica(unaRicarica:number):void{
        this.carica += unaRicarica
        console.log(`Il cliente ha effettuato una ricarica di ${unaRicarica}€, Credito residuo: ${this.carica}€`)
    }
    public chiamata(minutiDurata:number):void{
        let costoChiamata = minutiDurata*this.costoMin
        if (this.carica >= costoChiamata){
            this.carica -= costoChiamata
            this.numeroChiamate++
        }else{
            console.log(`Credito insufficiente per la telefonata, il credito residuo è: ${this.carica}€`)
        }

        
        
        
    }
    public numero404():number{
        console.log(`Credito residuo è ${this.carica}€`)
        return this.carica
    }
    public getNumeroChiamate():number{

        return this.numeroChiamate
    }
    public azzeraChiamate():void{
        this.numeroChiamate = 0
    }
}


//utente 1 effettua la telefonata
let u1= new FirstUser(25);
console.log(u1)
u1.chiamata(2)
u1.chiamata(5)
u1.chiamata(29)
//decommenta per azzerare le chiamate
//u1.azzeraChiamate()
//decommenta per verificare manualmente il credito residuo
//u1.numero404()
console.log(`L'utente ha effettuato ${u1.numeroChiamate} chiamate ed il credito residuo è di : ${u1.carica}€.`);


//utente 2 effettua la telefonata
let u2= new SecondUser(10);
console.log(u2)
u2.chiamata(2)
u2.chiamata(5)
u2.chiamata(8)
//decommenta per azzerare le chiamate
//u2.azzeraChiamate()
//decommenta per verificare manualmente il credito residuo
//u2.numero404()
console.log(`L'utente ha effettuato ${u2.numeroChiamate} chiamate ed il credito residuo è di : ${u2.carica}€.`);


//utente 3 effettua la chiamata
let u3= new ThirdUser(13);
console.log(u3)
u3.chiamata(18)
u3.chiamata(7)
u3.chiamata(26)
u3.chiamata(20) //utente 3 ha credito insufficiente per effettuare la quarta chiamata
//decommenta per azzerare le chiamate
//u3.azzeraChiamate()
//decommenta per verificare manualmente il credito residuo
//u3.numero404()
console.log(`L'utente ha effettuato ${u3.numeroChiamate} chiamate ed il credito residuo è di : ${u3.carica}€.`);