import { Component, OnInit } from '@angular/core';
import {ProductComplete} from '@models/product-complete.model';
import {ProductsService} from '@services/products.service';
import {isNumeric} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public products_list: ProductComplete[];
  public page: number = 1;
  public page_sent: number = 0;
  public total_products: number;
  public total_pages: number;
  public products_per_page: number = 6;
  constructor(private productsService: ProductsService) { }

  public getProductsByDepartment(department_id: number){

  }

  public alterPage(event) {
      event.preventDefault();
      if(isNumeric(event.target.value)){
        let actual_page = event.target.value > this.total_pages ? this.page_sent : event.target.value;
        actual_page = actual_page == 0 ? 1 : actual_page;
        this.page = actual_page;
        event.target.value = actual_page;
        if(this.page_sent != actual_page){
          this.getProducts(actual_page);
        }
      }else{
        this.page = this.page_sent;
        event.target.value = this.page_sent;
      }
  }

  public sumPage(sum: number){
    this.page = this.page + sum > this.total_pages || this.page + sum < 1? this.page : this.page + sum;
    if(this.page != this.page_sent){
      this.getProducts(this.page); 
    }
  }

  public getProductsByCategory(category_id: number, page: number = 1){

      this.productsService.get(page, this.products_per_page).subscribe(
          result => {
              this.products_list = result.rows;
          }, error => {
            console.log(error);
          }
      );
  }

  public getProducts(page = 1){
      this.productsService.get(page, this.products_per_page).subscribe(
          result => {
            this.page = page;
            this.products_list = result.rows;
            this.total_products = result.count;
            this.total_pages = Math.ceil((this.total_products / this.products_per_page));
            this.page_sent = page;
          }, error => {
            console.log(error);
          }
      );
  }

  ngOnInit() {
    this.getProducts();
  }

}
