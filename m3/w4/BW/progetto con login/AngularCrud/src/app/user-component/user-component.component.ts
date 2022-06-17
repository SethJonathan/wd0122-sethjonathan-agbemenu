import { Component, OnInit } from '@angular/core';
import { AuthData, AuthService } from '../auth/auth.service';

interface IUser {
  name: string;
  email: string;
  id: number;
}

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {

  user!:IUser;

  constructor(private authSrv:AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authSrv.logout()
  }

}
