import { Component, OnInit } from '@angular/core';
import {CustomersService} from '@services/customers.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public name: string;
  public email: string;
  public password: string;
  public password_copy: string;

  constructor(
      private customersService: CustomersService,
      public bsModalRef: BsModalRef,
      private bsModalService: BsModalService
  ) { }
  public goToLogin(){
    this.bsModalRef.hide();
    this.bsModalService.show(LoginComponent);
  }

  register(){
    if(this.password == this.password_copy) {
      this.customersService.register(this.name, this.email, this.password)
          .subscribe(
              result => {
                this.customersService.user = result.customer;
                localStorage.setItem('accessToken', result.accessToken);
              }, error => {
                localStorage.setItem('accessToken', '');
              }
          );
    }
  }


  ngOnInit() {
  }

}
