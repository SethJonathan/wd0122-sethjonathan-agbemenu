import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { FilmsHomeFeedComponent } from './pages/films-home-feed/films-home-feed.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "emailVerification", component: EmailVerificationComponent},
  { path: "filmshomefeed", component: FilmsHomeFeedComponent},
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
