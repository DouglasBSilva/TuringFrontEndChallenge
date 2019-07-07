import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ShoppingcartService} from '@services/shoppingcart.service';
import {CartWithProduct} from '@models/cart-with-product.model';
import {CustomersService} from '@services/customers.service';
import {LoginComponent} from '../../auth/login/login.component';
import {OrdersService} from '@services/orders.service';
import {CheckShippingAddressComponent} from '../../shipping/check-shipping-address/check-shipping-address.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cart_itens: CartWithProduct[] = [];
  constructor(
      public bsModalRef: BsModalRef,
      public bsModalService: BsModalService,
      private shoppingCartService: ShoppingcartService,
      private customersService: CustomersService,
      private orderService: OrdersService
  ) { }

  public tryCheckout(){
      if(this.customersService.user){
          if(this.customersService.user.name){
            this.bsModalService.show(CheckShippingAddressComponent, {class: 'modal-lg'});
          }else{
            this.bsModalService.show(LoginComponent);
          }
      }
  }

  public removeItem(item_id: number){
      this.shoppingCartService.removeProduct(item_id)
          .subscribe(
          () => {
              this.cart_itens = this.cart_itens.filter(item => item.item_id !== item_id);
          }
      );
  }

  private getItensCart() {
    this.shoppingCartService.get()
        .subscribe(
          result => {
            this.cart_itens = result;
          }
        );
  }

  ngOnInit() {
    this.getItensCart();

  }

}
