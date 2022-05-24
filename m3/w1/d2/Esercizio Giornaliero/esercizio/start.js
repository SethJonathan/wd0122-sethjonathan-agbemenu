var SonAccount = /** @class */ (function () {
    function SonAccount(saldoIniziale) {
        this.saldoIniziale = saldoIniziale;
    }
    SonAccount.prototype.deposit = function (deposit) {
        return this.saldoIniziale = this.saldoIniziale + deposit;
    };
    SonAccount.prototype.oneWithdraw = function (withdraw) {
        this.saldoIniziale = this.saldoIniziale - withdraw;
        return withdraw;
    };
    SonAccount.prototype.twoWithdraw = function (withdraw) {
        this.saldoIniziale = this.saldoIniziale - withdraw;
        return withdraw;
    };
    SonAccount.prototype.totalBalance = function () {
        var sconto = 10;
        var BiFinale;
        return this.saldoIniziale = ((this.saldoIniziale * sconto / 100)) + "\u20AC";
        //BiFinale = this.saldoIniziale + '€'
        //return BiFinale
    };
    return SonAccount;
}());
console.log('------------son account----------------- ' + '\n');
// set della proprietà al costruttore
var son = new SonAccount(0);
console.log(son);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + son.deposit(1000));
console.log('withdraw:-' + son.oneWithdraw(500));
console.log('withdraw:-' + son.twoWithdraw(800));
console.log('totalBalance:' + son.totalBalance());
//console.log('Bilancio finale:' + BiFinale)
var MotherAccount = /** @class */ (function () {
    function MotherAccount(saldoIniziale) {
        this.saldoIniziale = saldoIniziale;
    }
    MotherAccount.prototype.deposit = function (deposit) {
        return this.saldoIniziale = this.saldoIniziale + deposit;
    };
    MotherAccount.prototype.oneWithdraw = function (withdraw) {
        this.saldoIniziale = this.saldoIniziale - withdraw;
        return withdraw;
    };
    MotherAccount.prototype.twoWithdraw = function (withdraw) {
        this.saldoIniziale = this.saldoIniziale - withdraw;
        return withdraw;
    };
    MotherAccount.prototype.totalBalance = function () {
        var sconto = 10;
        return this.saldoIniziale = ((this.saldoIniziale * sconto / 100)) + "\u20AC";
    };
    return MotherAccount;
}());
var mother = new MotherAccount(0);
console.log('--------------mother account----------------------------------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + mother.deposit(1000));
console.log('withdraw:-' + mother.oneWithdraw(500));
;
console.log('withdraw:-' + mother.twoWithdraw(400));
console.log('totalBalance:' + mother.totalBalance());
