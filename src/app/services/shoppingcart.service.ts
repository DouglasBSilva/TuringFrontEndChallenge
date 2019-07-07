import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductComplete} from '@models/product-complete.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {
  private base_url = '/shoppingcart';
  static _amount = 0;

  get amount():number{
      return ShoppingcartService._amount;
  }

    set amount(amount: number){
        ShoppingcartService._amount = amount;
    }

  constructor(private client: HttpClient) {
  }

  public find(): Observable<any> {
    return this.client.get(environment.api_url + this.base_url + '/' + localStorage.getItem('cart_id'));
  }

  public getTotalAmout(){
      console.log( localStorage.getItem('cart_id'));
      this.client.get(environment.api_url + this.base_url + '/totalAmount/' + localStorage.getItem('cart_id'))
          .subscribe(
              (result: any) =>{
                    this.amount = result.total_amount;
              }, error => {

              }
          );

  }
  public add(product_id: number, attributes:string): Observable<any> {
    let params = {
      product_id: product_id,
      attributes: attributes,
      cart_id: localStorage.getItem('cart_id')
    }
    return this.client.post<any>(environment.api_url + this.base_url + '/add', params);
  }

  public removeProduct(item_id: number): Observable<any>{
      return this.client.delete(environment.api_url + this.base_url + '/removeProduct/' + item_id);
  }

  public update(item_id: number, quantity: number): Observable<any> {
    const params = {
      item_id: item_id,
      quantity: quantity
    };
    return this.client.put<any>(environment.api_url + this.base_url + '/update/' + item_id, params);
  }

  public startCart(): void{
    if(!localStorage.getItem('cart_id')) {
      this.client.get(environment.api_url + this.base_url + '/generateUniqueId')
          .subscribe(
              (result: any) => {
                localStorage.setItem('cart_id', result.cart_id);
                this.getTotalAmout();
              }, error => {

              }
          );
      } else {
        this.getTotalAmout();
      }
  }

  public get(): Observable<any> {
    return this.client.get<any>(environment.api_url + this.base_url + '/' + localStorage.getItem('cart_id'));
  }
}
