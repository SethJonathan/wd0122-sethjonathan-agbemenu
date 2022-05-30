import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Esercizio-prova';

  nomi:any[] = []

  utenteSelezionato = {nome:"test",cognome:"test1",id:"test3"}

  ngOnInit() {
    fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).
    then(res =>{
      for (let persona of res){
        let nome = persona.name
        this.nomi.push(nome)
      }
    })
  }
  index:number = this.nomi.indexOf("15")

  elimina(n:number) {
    this.nomi.splice(this.index, n);
  }
  aggiungi(){
    let n:string|num = prompt('Inserire nome')
    let u:string|null = prompt('Inserire username')
    if(n && u) {
      this.nomi.push({
        username: u,
        name: n,
        id: this.nomi.length
      })
    }else{
      alert("test")
    }
  }  
  edit(id:number){

  }

  details(id:number){
    this.nomi.append(list);

  }
}

