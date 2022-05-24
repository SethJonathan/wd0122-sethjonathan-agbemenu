class Car{

    public modello:string;
    public marca:string;
    public colore:string;
    
    protected prezzo:number;
    protected scontoRivenditore:number = 30;

    static stato='Italia';

    constructor(mod:string, mar:string, col:string, p:number){
        this.modello = mod;
        this.marca = mar;
        this.colore = col;
        this.prezzo = p
    }

    public dettagliAuto():string{
        return this.modello + " " + this.marca + " " + this.colore;
    }

    public set cambiaScontoRivenditore(n:number){
        this.scontoRivenditore = n;
    }

    public get prezzoFinale():string{
        return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100) + '€';
    }

    public static nazione():void{
        console.log('Italia');
    }

}

let fiat = new Car('500','fiat','grigio',10000);

console.log(fiat.modello)
console.log(fiat.prezzoFinale);
//console.log(fiat.scontoRivenditore) non posso accedere a private e protected
//fiat.scontoRivenditore =20: //non posso accedere alle proprietà protected o private

fiat.cambiaScontoRivenditore = 20 //il metodo setter modifica anche le proprietà con accesso privato o protetto
console.log(fiat.prezzoFinale);
console.log(fiat);

//fiat.nazione();//non posso usarlo così

Car.nazione();
