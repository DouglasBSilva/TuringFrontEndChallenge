import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../../../auth/login/login.component';
import {RegisterComponent} from '../../../auth/register/register.component';
import {BsModalService} from 'ngx-bootstrap';
import {CustomersService} from '@services/customers.service';
import {ShoppingcartService} from '@services/shoppingcart.service';
import {DetailUserComponent} from '../../../user/detail-user/detail-user.component';
import {CartComponent} from '../../cart/cart.component';

@Component({
  selector: 'app-second-nav-bar',
  templateUrl: './second-nav-bar.component.html',
  styleUrls: ['./second-nav-bar.component.scss']
})
export class SecondNavBarComponent implements OnInit {

  constructor(
      private bsModalService: BsModalService,
      public customersService: CustomersService,
      public cartService: ShoppingcartService
  ) { }
  public openLoginModal(){
    this.bsModalService.show(LoginComponent);
  }
  public openUserDetail(){
    this.bsModalService.show(DetailUserComponent, {class: 'modal-lg'});
  }
  public openCart(){
    this.bsModalService.show(CartComponent, {class: 'max-w-1200'});
  }
  public openRegisterModal() {
    this.bsModalService.show(RegisterComponent);
  }
  ngOnInit() {
  }

}
