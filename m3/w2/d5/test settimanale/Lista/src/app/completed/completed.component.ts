import { Component, OnInit } from '@angular/core';
import { Itodo } from '../interface/itodo';
import { TodoService } from '../service/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  todos:Itodo[]|undefined = undefined

  constructor(private todoService:TodoService){}

  

  ngOnInit(): void {
    this.todoService.getTodos(true).then(res=>{
      this.todos = res
    })
  }

  elimina(id:number){
    this.todoService.removeTodo(id).then(res=>{
      this.todos = []
    })
  }

  refresh(){
    this.todoService.getTodos(true).then(res=>{
      this.todos = res
    })
  }

}
