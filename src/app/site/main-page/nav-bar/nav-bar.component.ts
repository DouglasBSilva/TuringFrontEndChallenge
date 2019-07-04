import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  public active_department: number;
  @Output() onTryOpenCategories: EventEmitter<number> = new EventEmitter();
  constructor(
      private departmentService: DepartmentsService

  ) { }

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
