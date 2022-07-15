import { Component, OnInit } from '@angular/core';

import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSStorage } from 'firebasets/firebasetsStorage/firebaseTSStorage';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.css']
})
export class CreateFilmComponent implements OnInit {

  selectedImageFile!: File;
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  storage = new FirebaseTSStorage();

  constructor(private dialog: MatDialogRef<CreateFilmComponent>) { }

  ngOnInit(): void {
  }

  onFilmClick(commentInput:HTMLTextAreaElement, titleInput:HTMLTextAreaElement, descriptionInput:HTMLTextAreaElement){
    let comment = commentInput.value;
    let title =  titleInput.value;
    let description = descriptionInput.value;
    if(comment.length <= 0 ) return;
    if(this.selectedImageFile) {
      this.uploadImageFilm(comment, title, description);
    } else {
      this.uploadFilm(comment, title, description);
    }
  }

  uploadImageFilm(comment: string, title: string, description: string){
    let filmId = this.firestore.genDocId();
    this.storage.upload(
      {
        uploadName: "upload Image Film",
        path: ["Films", filmId, "image"],
        data: {
          data: this.selectedImageFile
        },
        onComplete: (downloadUrl) => {
          this.firestore.create(
            {
              path: ["Films", filmId],
              data: {
                comment: comment,
                creatorId: this.auth.getAuth().currentUser!.uid,
                imageUrl: downloadUrl,
                title: title,
                description: description,
                timestamp: FirebaseTSApp.getFirestoreTimestamp()
              },
              onComplete: (docId) => {
                this.dialog.close();
              }
            }
          );
        }
      }
    );
  }

  uploadFilm(comment: string, title: string, description: string){
    this.firestore.create(
      {
        path: ["Films"],
        data: {
          comment: comment,
          title: title,
          description: description,
          creatorId: this.auth.getAuth().currentUser!.uid,
          timestamp: FirebaseTSApp.getFirestoreTimestamp()
        },
        onComplete: (docId) => {
          this.dialog.close();
        }
      }
      );
    }
    
    onPhotoSelected(photoSelector: HTMLInputElement){
      this.selectedImageFile = photoSelector.files![0];
      if(!this.selectedImageFile) return;  
      let fileReader = new FileReader();
      fileReader.readAsDataURL(this.selectedImageFile);
      fileReader.addEventListener(
        "loadend",
        ev => {
          let readableString = fileReader.result!.toString();
          let postPreviewImage = <HTMLImageElement>document.getElementById("film-preview-image");
          postPreviewImage.src = readableString;
        }
      );
    }
}
