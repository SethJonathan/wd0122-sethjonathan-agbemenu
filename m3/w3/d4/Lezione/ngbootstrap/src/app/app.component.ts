import { Component } from '@angular/core';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngbootstrap';

  isCollapsed = true;
  

  open(){
    const riferimentoModal = this.modalService.open
    (LoginModalComponent)
  }
}
