import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Department} from '../models/department.model';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private base_url = '/categories';
  constructor(private client: HttpClient ) { }

  public get(): Observable<Department[]> {
    return this.client.get<Department[]>('https://backendapi.turing.com' + this.base_url);
  }

  public getByDepartmentId(id: number): Observable<Category[]> {
    return this.client.get<Category[]>('https://backendapi.turing.com' + this.base_url + '/inDepartment/' + id);
  }
}
