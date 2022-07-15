import { Component, Input, OnInit } from '@angular/core';
import { FilmData } from 'src/app/pages/films-home-feed/films-home-feed.component';

import { FirebaseTSFirestore} from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { MatDialog } from '@angular/material/dialog';

import { CreateCommentiComponent } from '../create-commenti/create-commenti.component';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  firestore = new FirebaseTSFirestore();

  @Input() filmData!: FilmData;
  filmName!: string;
  filmDescription!: string;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getFilmInfo();
  }

  onReplyClick(){
     this.dialog.open(CreateCommentiComponent, {data: this.filmData.filmId});
  }

  getFilmInfo(){
    this.firestore.getDocument(
      {
        path: ["Users", this.filmData.filmId],
        onComplete: result => {
          let userDocument = result.data();
          this.filmName = userDocument!['publicName'];//opzionale, si può inserire nell'html nel caso voglio postare il nome di chi ha creato la scheda del film
          this.filmDescription = userDocument!['description'];//descrizione di chi ha creato la scheda del film
        }
      }
    );
  }
  
}
