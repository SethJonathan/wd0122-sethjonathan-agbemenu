class Pizza{
    constructor(g, tipo = 'Napoletana', p= 5){
        //all'interno del constructor inizializzo/valorizzo le proprietà
        //ma posso anche lanciare funzioni/avviare processi
        this.gusto = g
        this.tipo = tipo
        this.prezzo = p

        this.dettagli()
    }

    dettagli(){
        console.log('La pizza '+this.gusto+' di tipo '+this.tipo+' costa '+this.prezzo+' euro')
    }



}


let margherita = new Pizza('Margherita')


//sistema furbo per oggetti che hanno tanti argomenti

class Prova{
    constructor(obj){
        this.gusto = obj.gusto || 'Margherita'
        this.tipo = obj.tipo || 'Napoletana'
        this.prezzo = obj.prezzo || 5
        this.sconto = 0
    }
}

let info = {
    gusto: 'Diavola',
    tipo: 'Napoletana',
    prezzo: 6
}

let prova = new Prova(info)
console.log(prova)


//ereditarietà

class Persona{
    constructor(nome, cognome, anni){
        this.nome = nome
        this.cognome = cognome
        this.anni = anni
    }

    presentazione(){
        console.log(`Ciao, mi chiamo ${this.nome} ${this.cognome} ed ho ${this.anni} anni`);
        //console.log('Ciao, mi chiamo '+this.nome+' '+this.cognome+' ed ho '+this.anni+ ' anni');
    }

    mostraDataIscrizione(){
        console.log(this.mostraDataIscrizione.toLocaleDateString('it-IT'))
    }

    static
}

let persona = new Persona('Mario', 'Rossi', 30);
persona.presentazione()

Persona.mostraData()

class Studente extends Persona{
    constructor(nome, cognome, anni, materie){
        super(nome, cognome, anni)//attiva il costruttore della classe genitore valorizzando di fatto le proprità ed eventualmente lanciando le stesse funzioni
        this.materie = materie
    }

    presentazione(){
        return super.presentazione()+' e sto studiando le seguenti materie: ' + this.materie
    }
}

let studente = new Studente('Maria', 'Rosa', 20, ['HTML', 'CSS', 'JS'])
console.log(studente.presentazione() )//questo metodo è un override, ossia un arricchimento dell'omonimo metodo appartenente al genitore
console.log(studente); //questo metodo è stato ereditato, di fatto non lo abbiamo
