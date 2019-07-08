import { Component, OnInit } from '@angular/core';
import {CustomersService} from '@services/customers.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {RegisterComponent} from '../register/register.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
      private customersService: CustomersService,
      public bsModalRef: BsModalRef,
      private bsModalService: BsModalService
  ) { }

  public goToRegister(){
      this.bsModalRef.hide();
      this.bsModalService.show(RegisterComponent);
  }

  public loginFacebook(){
    this.customersService.loginFacebookApi().subscribe(
        result => {
          this.customersService.user = result.customer;
          localStorage.setItem('accessToken', result.accessToken);
          this.bsModalRef.hide();
        }, error => {
          console.log(error);
          // localStorage.setItem('accessToken', '');
        }
    );
  }

  public login() {
      this.customersService.login(this.email, this.password)
          .subscribe(
              result => {
                this.customersService.user = result.customer;
                localStorage.setItem('accessToken', result.accessToken);
                this.bsModalRef.hide();
              }, error => {
                localStorage.setItem('accessToken', '');
          }
      );
  }

  ngOnInit() {
  }
}
