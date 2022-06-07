import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  @ViewChild('f',{static: true}) form!:NgForm;
  //seleziono l'elemento identificato con #f all'interno del template
  //lo affido alla proprietà form
  //{static:true}serve a far si che la proprietà venga valorizzata prima, rendendola disponibile nel metodo ngOnInit(){}

  constructor() { }

  email: string = '';
  password: string = '';
  city: string = '';

  ngOnInit(): void {
    this.form.statusChanges?.subscribe(()=>{})
  }

  submit(form:any){
    console.log(form);
  }

}
