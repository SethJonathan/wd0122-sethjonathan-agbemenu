//const APPURL:string = 'Abbigliamento.json';
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abbigliamento.prototype.getSaldoCapo = function () {
        //scontato ugnuale a prezzp per saldo diviso cento 
        this.scontato = (this.prezzoivaesclusa * this.saldo) / 100;
        return this.scontato;
    };
    Abbigliamento.prototype.getAcquistoCapo = function () {
        return this.prezzoivaesclusa - this.scontato;
    };
    return Abbigliamento;
}());
fetch(APPURL).then(function (res) { return res.json(); }).then(function (res) {
    var a = new Vestiario();
    a.getSaldoCapo();
    a.getAcquistoCapo();
    console.log(getSaldoCapo());
});
