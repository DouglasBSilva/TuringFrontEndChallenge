import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './site/main-page/main-page.component';
import {ProductsListComponent} from './site/main-page/products/products-list/products-list.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, children: [
      {path: '', component: ProductsListComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
