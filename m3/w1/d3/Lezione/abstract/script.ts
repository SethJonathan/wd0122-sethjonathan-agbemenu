class Veicoli{

    public ruote:number;

    public marca:string;
    public modello:string;

    protected prezzo:number;

    public tipo:string;

    constructor(ruote:number, marca:string, modello:string, prezzo:number, tipo:string){
        this.ruote = ruote;     
        this.marca = marca;
        this.modello = modello;       
        this.prezzo = prezzo;
        this.tipo = tipo
    }

    dettagliVeicolo(){
        return `Modello: ${this.modello}, Marca: ${this.marca}, Ruote: ${this.ruote}`;
    }

}

//let apecar = new Veicoli(3,'Piaggio','',1500,'apecar'); //non si può fare