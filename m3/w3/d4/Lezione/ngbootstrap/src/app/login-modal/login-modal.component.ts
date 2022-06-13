import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  @Input() title!:string;
  @Input() modal!:string;

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    this.modalService.close()
  }

  

}
