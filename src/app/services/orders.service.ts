import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private base_url = '/orders';

  constructor(private client: HttpClient) { }

  public create(cart_id: string, shipping_id: number, tax_id: number = 2): Observable<any>{
    let params = {cart_id, shipping_id, tax_id };
    return this.client.post(environment.api_url + this.base_url, params);
  }

}
