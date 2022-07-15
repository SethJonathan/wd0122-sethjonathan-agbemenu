import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';
import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './tools/profile/profile.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { FilmsHomeFeedComponent } from './pages/films-home-feed/films-home-feed.component';
import { CreateFilmComponent } from './tools/create-film/create-film.component';
import { FilmComponent } from './tools/film/film.component';
import { DashboardUserComponent } from './pages/dashboard-user/dashboard-user.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { CreateCommentiComponent } from './tools/create-commenti/create-commenti.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticatorComponent,
    ProfileComponent,
    EmailVerificationComponent,
    FilmsHomeFeedComponent,
    CreateFilmComponent,
    FilmComponent,
    DashboardUserComponent,
    CreateCommentiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    FirebaseTSApp.init(
      environment.firebaseConfig
    );
  }
 }
