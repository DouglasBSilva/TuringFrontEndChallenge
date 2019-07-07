import {Component, Input, OnInit} from '@angular/core';
import {ProductComplete} from '@models/product-complete.model';
import {BsModalService} from 'ngx-bootstrap';
import {ProductsDetailCompleteComponent} from '../products-detail-complete/products-detail-complete.component';
@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {
  @Input() product: ProductComplete;
  constructor(
  	private bsModalService: BsModalService
  	) { }

  public openProduct(){
      const initialState = {product_id: this.product.product_id};
      this.bsModalService.show(ProductsDetailCompleteComponent, {initialState, class: 'max-w-1200'});
  }

  ngOnInit() {
  }

}
