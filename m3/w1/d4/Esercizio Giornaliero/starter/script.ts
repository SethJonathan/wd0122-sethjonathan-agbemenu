//const APPURL:string = 'Abbigliamento.json';

abstract class Abbigliamento{
    //propretà ogni vestito
    public id:number;
    private codprod:number;
    public collezione:string;
    public capo:string;
    private modello:number;
    public quantita:number;
    public colore:string;
    private prezzoivaesclusa:number;
    public prezzoivainclusa:number;
    public disponibile:string
    public saldo:number;


    constructor(id:number, codprod:number, collezione:string, capo:string, modello:number, quantita:number, colore:string, prezzoivaesclusa:number, prezzoivainclusa:number, disponibile:string, saldo:number){
        this.id = id;
        this.codprod = codprod;
        this.collezione= collezione;
        this.capo= capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa= prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }

    
    public abstract scontato:number

    public getSaldoCapo():number{
        //scontato ugnuale a prezzp per saldo diviso cento 
        
        this.scontato = (this.prezzoivaesclusa*this.saldo)/100
        return this.scontato;

    }

    public getAcquistoCapo():number{

        return this.prezzoivaesclusa - this.scontato
    }

}




fetch(APPURL).then(res=>res.json()).then(res=>{
    let a = new Vestiario();
    a.getSaldoCapo()
    a.getAcquistoCapo()
    
    console.log(getSaldoCapo())
})

