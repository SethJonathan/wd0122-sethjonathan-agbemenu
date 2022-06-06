import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  favouritePhotos = new Subject<number>

  counter = 0

  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http.get('').pipe(catchError(err=>{
      return throwError(err)
    } =>))
  }

  addFavourite(){
    this.counter++
    this.favouritePhotos.next(this.counter)
  }
}
