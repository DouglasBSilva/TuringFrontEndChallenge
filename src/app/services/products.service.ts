import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private base_url =  '/products';
  constructor(private client: HttpClient) { }

  public get(page: number = 1, limit: number = 20, description_lenght: number = 200): Observable<any> {
    const options = { params: new HttpParams().set('page',  page.toString()).append('limit', limit.toString()).append('description_lenght', description_lenght.toString()) };
    // const params = new HttpParams();
    //   params.set('page', page.toString());
    // params.set('limit', limit.toString());
    // params.set('description_lenght', description_lenght.toString());
    return this.client.get<any>(environment.api_url + this.base_url, options);
  }

}
