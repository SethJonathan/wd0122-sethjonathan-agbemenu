import { Injectable } from '@angular/core';
import { Itodo } from '../interface/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  allTodos:Itodo[] = []

  constructor(){
    
  }

  getTodos(comp:boolean):Promise<Itodo[]>{
    return new Promise((succ, err)=>{
      setTimeout(()=>{
        let filteredTodos = this.allTodos.filter(e=>e.completed == comp)
        succ(filteredTodos)
      },2000)
    })    
  }

  removeTodo(id:number):Promise<Itodo[]>{
    return new Promise((succ, err)=>{
      setTimeout(()=>{
        this.allTodos = this.allTodos.filter(e=>e.completed)
        succ(this.allTodos)
      },2000)
    })  
  }

  updateTodo(id:number):Promise<Itodo[]>{
    return new Promise((succ, err)=>{
      setTimeout(()=>{
        //if(this.allTodos.find(e=>e,id==id)){
        this.allTodos = this.allTodos.map(e=>e.id?{...e, completed:!e.completed}:e)
        succ(this.allTodos)
      //}else{
      //  err(this.allTodos)
      //}

      },2000)
    }) 
  }

  AddTodo(title:string):Promise<Itodo[]>{
    return new Promise((succ, err)=>{
      setTimeout(()=>{
        this.allTodos.push({id:this.allTodos.length, title:title, completed:false})
        succ(this.allTodos)
      },2000)
    })   
  }

}