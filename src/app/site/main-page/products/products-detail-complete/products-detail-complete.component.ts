import {Component, OnInit, ɵAttributeMarker} from '@angular/core';
import {ProductComplete} from '@models/product-complete.model';
import {ProductsService} from '@services/products.service';
import {ActivatedRoute} from '@angular/router';
import {isNumeric} from 'rxjs/internal-compatibility';
import {Cart} from '@models/cart.model';
import {AttributesService} from '@services/attributes.service';
import {ShoppingcartService} from '@services/shoppingcart.service';

@Component({
  selector: 'app-products-detail-complete',
  templateUrl: './products-detail-complete.component.html',
  styleUrls: ['./products-detail-complete.component.scss']
})
export class ProductsDetailCompleteComponent implements OnInit {
  public product: ProductComplete;
  public product_id: number;
  public selected_image: string;
  public size: string = 'M';
  public quantity: number = 1;
  private last_valid_quantity: number = 1;
  private attributes = [];
  private attributes_selected = [];
  constructor(
      private productService: ProductsService,
      private activatedRouter: ActivatedRoute,
      private attributesService: AttributesService,
      private cartService: ShoppingcartService
  ) { }


  private formatAttributes(attributes) {
      let index = -1;
      let attribute_name = '';
      attributes.forEach((attribute) => {
          if(attribute.attribute_name != attribute_name){
              index ++;
              this.attributes[index] = [];
              attribute_name = attribute.attribute_name;
              this.attributes_selected[index] = attribute.attribute_value;
          }
          this.attributes[index].push(attribute);
      });
  }

  private getAttributes() {
      this.attributesService.findByProductId(this.product_id)
          .subscribe(
              result => {
                  this.formatAttributes(result);
              }, error => {

              }
          )
  }
  private getProduct() {

    this.productService.find(this.product_id)
        .subscribe(
            result => {
              this.product = result;
              this.selected_image = this.product.image;
            }, error => {

            }
        );
  }

  public addToCart(){
      this.cartService.add(this.product_id, this.attributes_selected.join(','))
          .subscribe(
              result => {
                 this.cartService.getTotalAmout();
              }, error => {

              }
          );
  }


  ngOnInit() {
    this.getProduct();
    this.getAttributes();

  }

}
