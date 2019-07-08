import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DepartmentsService} from '../../../services/departments.service';
import {Department} from '../../../models/department.model';
import {BsModalService} from 'ngx-bootstrap';
import {LoginComponent} from '../../auth/login/login.component';
import {RegisterComponent} from '../../auth/register/register.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public title = 'SHOPMATE';
  public departments: Department[];
  public active_department: number;
  @Output() onTryOpenCategories: EventEmitter<number> = new EventEmitter();
  @Output() onSearch: EventEmitter<string> = new EventEmitter();

    constructor(
      private departmentService: DepartmentsService

  ) { }

  public search(text: string){
        this.active_department = 0;
        this.onSearch.emit(text);
  }

  public openCategories(department_id: number){
      this.active_department = (this.active_department === department_id ? 0 : department_id);
      this.onTryOpenCategories.emit(department_id);
  }

  private setDepartmentsNames() {
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
    this.setDepartmentsNames();
  }

}
