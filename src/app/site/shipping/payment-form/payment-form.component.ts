import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {StripeService, ElementsOptions, StripeCardComponent, ElementOptions} from 'ngx-stripe';
import {ShoppingcartService} from '@services/shoppingcart.service';
import {OrdersService} from '@services/orders.service';
import {CustomersService} from '@services/customers.service';
import {BsModalRef} from 'ngx-bootstrap';
import {StripeService as ApiStripService} from '@services/stripe.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  @ViewChild(StripeCardComponent, {static: false}) card: StripeCardComponent;
  private order_id: number;

  cardOptions: ElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        lineHeight: '40px',
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: ElementsOptions = {
    locale: 'en'
  };

  stripeTest: FormGroup;

  constructor(
      private fb: FormBuilder,
      private stripeService: StripeService,
      private shoppingCartService: ShoppingcartService,
      private orderService: OrdersService,
      private customersService: CustomersService,
      private bsModalRef: BsModalRef,
      private apiStripeService: ApiStripService,
      private toastr: ToastrService
  ) {}
  private createOrder(stripe_token: string){
    this.orderService.create(localStorage.getItem('cart_id'), this.customersService.user.shipping_region_id)
        .subscribe(
            result => {
              this.apiStripeService.charge(stripe_token, result.orderId, this.customersService.user.name , parseInt(this.shoppingCartService.amount.toFixed(0), 10))
                  .subscribe(
                      success => {
                          this.toastr.success('Your order was concluded with success', 'Success');
                          window.location.href = '';
                      }
                  );
            }, error => {
              this.bsModalRef.hide();
            }
        );
  }


  ngOnInit() {
    this.shoppingCartService.getTotalAmout();

    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  buy() {
    const name = this.stripeTest.get('name').value;
    this.stripeService
        .createToken(this.card.getCard(), { name })
        .subscribe(result => {
          if (result.token) {
              this.createOrder(result.token.id);

            // Use the token to create a charge or a customer
            // https://stripe.com/docs/charges
          } else if (result.error) {
            // Error creating the token
          }
        });
  }

}
