import {Component, Input, OnInit} from '@angular/core';
import {ProductComplete} from '@models/product-complete.model';
@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {
  @Input() product: ProductComplete;
  constructor() { }
  ngOnInit() {
  }

}
