import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FirebaseTSFirestore, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp'

import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-create-commenti',
  templateUrl: './create-commenti.component.html',
  styleUrls: ['./create-commenti.component.css']
})
export class CreateCommentiComponent implements OnInit {
  firestore = new FirebaseTSFirestore();
  comments: Comment [] = [];

  constructor(@Inject(MAT_DIALOG_DATA) private filmId: string) { }

  ngOnInit(): void {
    this.getComments();
  }

  isCommentCreator(comment: Comment){
    try {
      return comment.creatorId == AppComponent.getUserDocument().userId;
    } catch (err) {
      return
    }
  }

  getComments(){
    this.firestore.listenToCollection(
      {
        name: "Film Comments",
        path: ["Films", this.filmId, "FilmComments"],
        where: [new OrderBy("timestamp", "asc")],
        onUpdate: (result)=>{
          result.docChanges().forEach(
            filmCommentDoc => {
              if(filmCommentDoc.type == "added"){
                this.comments.unshift(<Comment>filmCommentDoc.doc.data());
              }
            }
          )
        }
      }
    );
    
  }

  onSendClick(commentInput: HTMLInputElement){
    if (!(commentInput.value.length > 0)) return;
    this.firestore.create(
      {
        path: ["Films", this.filmId, "FilmComments"],
        data: {
          comment: commentInput.value,
          creatorId: AppComponent.getUserDocument().userId,
          creatorName: AppComponent.getUserDocument().publicName,
          timestamp: FirebaseTSApp.getFirestoreTimestamp()
        },
        onComplete: (docId)=>{
          commentInput.value = "";
        }
      }
    )
  }
  
}

export interface Comment{
  creatorId: string
  creatorName: string
  comment: string
  timestamp: firebase.default.firestore.Timestamp
}