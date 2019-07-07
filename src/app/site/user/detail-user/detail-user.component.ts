import { Component, OnInit } from '@angular/core';
import {CustomersService} from '@services/customers.service';
import {ShippingService} from '@services/shipping.service';
import {BsModalRef} from 'ngx-bootstrap';
import {Customer} from '@models/customer.model';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
  public user_shipping: string = 'No shipping Region Selected';
  public bl_edit_address = false;
  public bl_edit_credit_card = false;
  public shippings: [];
  public local_user: Customer;
  constructor(
      public customersService: CustomersService,
      private shippingService: ShippingService,
      private bsModalRef: BsModalRef
  ) { }

  public updateCreditCard() {
    this.customersService.updateCreditCard(this.local_user.credit_card)
        .subscribe(
            result => {
              this.customersService.user = result;
              this.closeCreditCard();
            }
        );
  }

  public logout(){
    if(this.customersService.logout()){
      this.bsModalRef.hide();
    }
  }

  public updateAddress() {
    this.customersService.updateAddress(this.local_user)
        .subscribe(
            result => {
              this.customersService.user = result;
              this.closeAddress();
            }
        );
  }

  public closeCreditCard(edited: boolean= false){
    if(!edited){
      this.local_user = JSON.parse(JSON.stringify(this.customersService.user));
    }

    this.bl_edit_credit_card = false;
  }

  public closeAddress(edited: boolean= false){
    if(!edited){
      this.local_user = JSON.parse(JSON.stringify(this.customersService.user));
    }

    this.bl_edit_address = false;
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

  // private getShippingUser(bl_select_shippings:boolean = true){
  //   this.shippingService.find(this.customersService.user.shipping_region_id)
  //       .subscribe(
  //           result => {
  //               this.user_shipping = result[0] ? result[0].shipping_region : this.user_shipping;
  //               if(bl_select_shippings) {this.getShippings();}
  //           }
  //       );
  // }

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
