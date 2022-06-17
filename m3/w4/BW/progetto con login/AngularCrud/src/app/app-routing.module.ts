import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { ListaFilmComponent } from './lista-film/lista-film.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponentComponent } from './user-component/user-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'listafilm', component: ListaFilmComponent},
  {
    path: "user",
    component: UserComponentComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
