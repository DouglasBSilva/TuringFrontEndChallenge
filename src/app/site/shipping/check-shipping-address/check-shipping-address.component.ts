import { Component, OnInit } from '@angular/core';
import {Customer} from '@models/customer.model';
import {CustomersService} from '@services/customers.service';
import {ShippingService} from '@services/shipping.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {PaymentFormComponent} from '../payment-form/payment-form.component';

@Component({
  selector: 'app-check-shipping-address',
  templateUrl: './check-shipping-address.component.html',
  styleUrls: ['./check-shipping-address.component.scss']
})
export class CheckShippingAddressComponent implements OnInit {
  public user_shipping: string = 'No shipping Region Selected';
  public shippings: [];
  public local_user: Customer;
  constructor(
      public customersService: CustomersService,
      private shippingService: ShippingService,
      private bsModalRef: BsModalRef,
      private bsModalService: BsModalService
  ) { }

  public confirmShippingInformation() {
    this.bsModalService.show(PaymentFormComponent);
    this.bsModalRef.hide();

  }

  private checkUser() {
    let user_active = false;
    if(this.customersService.user){
      if(this.customersService.user.name){
        user_active = true;
      }
    }
    return true;
  }
  private getShippings() {
    this.shippingService.get()
        .subscribe(
            result => {
              this.shippings = result;
            }
        );
  }
  ngOnInit() {
    if(this.checkUser()) {
      this.getShippings();
      this.local_user = JSON.parse(JSON.stringify(this.customersService.user));
    } else {
      this.customersService.user = new Customer();
      this.bsModalRef.hide();
    }
  }
}
