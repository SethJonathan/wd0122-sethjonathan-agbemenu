import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private titlePage:Title){}
  ngOnInit(){}
  pageTitle(title:string){
    this.titlePage.setTitle(title);
  }

  
}
