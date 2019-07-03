import { Component, OnInit } from '@angular/core';
import {DepartmentsService} from '../../../services/departments.service';
import {Department} from '../../../models/department.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public title = 'SHOPMATE';
  public departments: Department[];

  constructor(
      private departmentService: DepartmentsService

  ) { }

  private setCategorysNames() {
   this.departmentService.get()
       .subscribe(
           (result: Department[]) => {
             this.departments = [];
             this.departments = result;
           }, (error: Error) => {
              console.log(error);
           }
       )
  }

  ngOnInit() {
    this.setCategorysNames();
  }

}
