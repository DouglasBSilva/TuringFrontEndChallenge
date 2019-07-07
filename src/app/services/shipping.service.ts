import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  private base_url = '/shipping';
  constructor(private client: HttpClient) { }

  public find(id: number): Observable<any> {
    return this.client.get(environment.api_url + this.base_url + '/regions/' + id);
  }

  public get(): Observable<any> {
    return this.client.get(environment.api_url + this.base_url + '/regions');
  }
}
