import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {ShoppingcartService} from '@services/shoppingcart.service';
import {CustomersService} from '@services/customers.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
    public title = 'turingFrontEndChallenge';
    public department_id: number;
    public category_id: number;
    @ViewChild(ProductsListComponent, {static: false}) product_list: ProductsListComponent;


    constructor(
      private cartService: ShoppingcartService,
      private customersService: CustomersService,
      private activedRouter: ActivatedRoute
  ) { }


    public onSearch(text: string = ''){
        this.department_id = null;
        this.category_id = null;
       if(text.length > 0){
           this.product_list.setSearchText(text);
       }else{
           this.product_list.setListFilter();
       }
    }


  public tryOpenCategory(department_id: number){
    this.department_id = (this.department_id === department_id ? null : department_id);
    if(this.department_id == null){ this.category_id = null;}
    let item_id = this.department_id || 0;
    let list_type = item_id > 0 ? 'department' : '';
    this.product_list.setListFilter(list_type, item_id);
  }

    public tryFilterByCategory(category_id: number){
        this.category_id = (this.category_id === category_id ? null : category_id);
        let item_id =  this.category_id || 0;
        let list_type = item_id > 0 ? 'category' : 'department';
        this.product_list.setListFilter(list_type, (item_id || this.department_id));
    }

  private autoConnectUser(){
    this.customersService.find()
        .subscribe(
            result => {
              this.customersService.user = result;
            }, error => {
              localStorage.setItem('accessToken', '');
            }
        )
  }

  private autoConnectFacebook(facebookToken: string){
    this.customersService.loginFacebookTuringApi(facebookToken)
        .subscribe(
            result => {
              this.customersService.user = result.customer;
              localStorage.setItem('accessToken', result.accessToken);
            }, error => {
              localStorage.setItem('facebookToken', '');
            }
        )
  }


  ngOnInit() {
    this.cartService.startCart();
    if (localStorage.getItem('accessToken')) {
      this.autoConnectUser();
    } else if(localStorage.getItem('facebookToken')){
      this.autoConnectFacebook(localStorage.getItem('facebookToken'));
    }
  }
}
