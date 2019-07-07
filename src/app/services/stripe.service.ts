import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  private base_url = '/stripe';

  constructor(private client: HttpClient) { }

  public charge(stripeToken: string, order_id: number, description: string, amount: number, currency: string = 'USD'): Observable<any> {
    const params = {stripeToken, order_id, description, amount, currency};
    return this.client.post(environment.api_url + this.base_url + '/charge', params);
  }


}
