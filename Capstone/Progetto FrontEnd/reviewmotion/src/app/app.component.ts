import { Component, ViewChild } from '@angular/core';

import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';

import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';

import { Router } from '@angular/router';

import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

import { MatSidenav } from '@angular/material/sidenav';

import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reviewmotion';
  auth=new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  userHasProfile=true;
  private static userDocument: UserDocument;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private loginSheet: MatBottomSheet, private router:Router){
    this.auth.listenToSignInStateChanges(
      user=>{
        this.auth.checkSignInState(
          {
            whenSignedIn: user => {
              
            },
            whenSignedOut: user => {
              //AppComponent.userDocument = null;
            },
            whenSignedInAndEmailNotVerified: user => {
              this.router.navigate(["emailVerification"]);
            },
            whenSignedInAndEmailVerified: user => {
              this.getUserProfile();
            },
            whenChanged: user => {
    
            }
          }
        );
      }
    );
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 1200px)']).subscribe((res)=>{
      if (res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })
  }

  public static getUserDocument(){
    return AppComponent.userDocument;
  }

  getUsername(){
    try {
      return AppComponent.userDocument.publicName;
    } catch (err){
      return
    }
  }

  getUserProfile(){
    this.firestore.listenToDocument(
      {
        name:"Getting Document",
        path:["Users", this.auth.getAuth().currentUser!.uid],
        onUpdate: (result) =>{
          AppComponent.userDocument = <UserDocument>result.data();
          this.userHasProfile = result.exists;
          AppComponent.userDocument.userId = this.auth.getAuth().currentUser!.uid
          if(this.userHasProfile){
            this.router.navigate(["filmshomefeed"])
          }
        }
      }
    );
  }

  onLogoutClick(){
    this.auth.signOut();
    this.router.navigate(["/"])
  }

  onLoginClick(){
    this.loginSheet.open(AuthenticatorComponent)
  }

  loggedIn(){
    return this.auth.isSignedIn();
  }

  


}

export interface UserDocument {
  publicName : string;
  description : string;
  userId: string;
}