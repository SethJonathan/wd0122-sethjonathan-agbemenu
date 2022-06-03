import { Component, OnInit } from '@angular/core';
import { Itodo } from '../interface/itodo';
import { TodoService } from '../service/todos.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos:Itodo[]|undefined = undefined

  input:string|undefined 

  constructor(private todoService:TodoService){ }

  ngOnInit(): void{
    this.todoService.getTodos(false).then(res=>{
      this.todos = res
    })
  }

  aggiungi(){
    this.todoService.AddTodo(this.input as string).then(res=>{
      this.todos=res.filter(e=>!e.completed)
    })
  }

  completa(id:number){
    this.todoService.updateTodo(id).then(res=>{
      this.todos=res.filter(e=>!e.completed)
    })
  }

}
