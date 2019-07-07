import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ProductComplete} from '@models/product-complete.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private base_url =  '/products';
  constructor(private client: HttpClient) { }

  public find(id: number): Observable<ProductComplete>{
    return this.client.get<ProductComplete>(environment.api_url + this.base_url + '/' + id);
  }

  public get(page: number = 1, limit: number = 20, description_lenght: number = 200): Observable<any> {
    const options = { params: new HttpParams().set('page',  page.toString())
          .append('limit', limit.toString())
          .append('description_lenght', description_lenght.toString()) };
    return this.client.get<any>(environment.api_url + this.base_url, options);
  }

  public getByDepartment( page: number = 1, limit: number = 20,  department_id: number, description_lenght: number = 200): Observable<any> {
    const options = { params: new HttpParams().set('page',  page.toString())
          .append('limit', limit.toString())
          .append('description_lenght', description_lenght.toString()) };
    return this.client.get<any>(environment.api_url + this.base_url + '/inDepartment/' + department_id, options);
  }

  public getByCategory(page: number = 1, limit: number = 20, category_id: number, description_lenght: number = 200): Observable<any> {
    const options = { params: new HttpParams().set('page',  page.toString())
          .append('limit', limit.toString())
          .append('description_lenght', description_lenght.toString()) };
    return this.client.get<any>(environment.api_url + this.base_url + '/inCategory/' + category_id, options);
  }

}
