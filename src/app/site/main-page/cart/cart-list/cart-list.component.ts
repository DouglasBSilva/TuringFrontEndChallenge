import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CartWithProduct} from '@models/cart-with-product.model';
import {ShoppingcartService} from '@services/shoppingcart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  @Input() cart_itens: CartWithProduct[];
  @Output() onRemoveItem: EventEmitter<number> = new EventEmitter();
  constructor(
      private shoppingCartService: ShoppingcartService
  ) { }
  public alterQuantity(add_number: number, item: CartWithProduct){
    if((add_number + item.quantity) > 1 && (add_number + item.quantity) < 99){
       item.quantity += add_number;
       this.shoppingCartService.update(item.item_id, item.quantity)
           .subscribe();
    }
  }

  public removeItem(item_id: number){
    this.onRemoveItem.emit(item_id);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.shoppingCartService.getTotalAmout();
  }

}
