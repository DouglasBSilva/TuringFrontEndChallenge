import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Department} from '../../../models/department.model';
import {CategoriesService} from '../../../services/categories.service';
import {Category} from '../../../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  @Input() department_id: number;
  public categories: Category[][];
  constructor(
      private categoryService: CategoriesService
  ) { }

  private getCategories() {
    this.categoryService.get()
        .subscribe(
            (result: Category[]) => {
              let category_itens_ordered_by_department: Category[][] = [];
              result['rows'].forEach((category) => {
                category_itens_ordered_by_department[category.department_id] = category_itens_ordered_by_department[category.department_id] || [];
                category_itens_ordered_by_department[category.department_id].push(category);
              });
              this.categories = [];
              this.categories = category_itens_ordered_by_department;
            }, (error: Error) => {
              console.log(error);
            }
        );
  }
  ngOnInit() {
      this.getCategories();
  }
}
