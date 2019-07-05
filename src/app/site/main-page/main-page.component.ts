import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsListComponent} from './products/products-list/products-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @ViewChild('product_list', {static: false}) product_list: ProductsListComponent;
  constructor() { }
  public title = 'turingFrontEndChallenge';
  public department_id: number;

  public tryOpenCategory(department_id: number){
    this.department_id = (this.department_id === department_id ? null : department_id);
    if (this.department_id != null) {
     this.product_list.getProductsByDepartment(this.department_id);
    } else {
      this.product_list.getProducts();
    }
  }
  ngOnInit() {
  }

}
