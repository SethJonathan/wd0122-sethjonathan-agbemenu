import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompletedComponent } from './completed/completed.component';
import { TodoComponent } from './todo/todo.component';



const routes: Routes = [/*
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path:'Home', component:AppComponent},
  {path:'Aggiungi nota a lista', component:TodoComponent},
  {path:'Vedi note complete', component:CompletedComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
