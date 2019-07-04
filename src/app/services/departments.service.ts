import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Department} from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  private base_url = '/departments';

  constructor(private client: HttpClient) { }


  public get(): Observable<Department[]> {
    return this.client.get<Department[]>('https://backendapi.turing.com' + this.base_url);
  }
}
