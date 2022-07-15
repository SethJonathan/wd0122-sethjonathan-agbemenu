import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CreateFilmComponent } from 'src/app/tools/create-film/create-film.component';

import { FirebaseTSFirestore, Limit, OrderBy, Where } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-films-home-feed',
  templateUrl: './films-home-feed.component.html',
  styleUrls: ['./films-home-feed.component.css']
})
export class FilmsHomeFeedComponent implements OnInit {

  firestore = new FirebaseTSFirestore();
  films: FilmData [] = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getFilms()
  }

  onCreateFilmClick(){
    this.dialog.open(CreateFilmComponent);
  }

  getFilms(){
    this.firestore.getCollection(
      {
        path: ["Films"],
        where: [
          // per vedere solo i film postati di un user id specifico es.admin new Where("creatorId", "==", "zbvhdO3W8xXPaBASpeb6y1FdEVE3"),
          new OrderBy("timestamp", "desc"),
          new Limit(10)
        ],
        onComplete: (result) => {
          result.docs.forEach(
            doc => {
              let film = <FilmData>doc.data();
              film.filmId = doc.id;
              this.films.push(film);
            }
          );
        },
        onFail: err => {

        }
      }
    );
  }
}



export interface FilmData{
  comment: string;
  creatorId: string;
  imageUrl?: string;
  filmId: string;
  title: string;
  description: string;
}