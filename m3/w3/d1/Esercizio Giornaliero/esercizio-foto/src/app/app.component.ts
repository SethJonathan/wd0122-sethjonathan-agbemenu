import { Component } from '@angular/core';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'esercizio-foto';

  constructor(private photoSrv:PhotoService){}

  ngOnInit() {
    this.photoSrv.favouritePhotos.subscribe(data => {
      
    })
  }
}
