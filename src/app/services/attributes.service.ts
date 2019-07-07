import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductComplete} from '@models/product-complete.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {
  private base_url = '/attributes';

  constructor(private client: HttpClient) {
  }

  public find(id: number): Observable<any> {
    return this.client.get<ProductComplete>(environment.api_url + this.base_url + '/' + id);
  }

  public findByProductId(id: number): Observable<any> {
    return this.client.get<any>(environment.api_url + this.base_url + '/inProduct/' + id);
  }
  public get(): Observable<any> {
    return this.client.get<any>(environment.api_url + this.base_url);
  }
}
