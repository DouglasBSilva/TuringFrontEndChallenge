import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './site/main-page/nav-bar/nav-bar.component';
import {DepartmentsService} from './services/departments.service';
import {HttpClientModule} from '@angular/common/http';
import { CategoryListComponent } from './site/main-page/category-list/category-list.component';
import { SecondNavBarComponent } from './site/main-page/nav-bar/second-nav-bar/second-nav-bar.component';
import { ProductsListComponent } from './site/main-page/products/products-list/products-list.component';
import { ProductsDetailComponent } from './site/main-page/products/products-detail/products-detail.component';
import {FormsModule} from '@angular/forms';
import { MainPageComponent } from './site/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CategoryListComponent,
    SecondNavBarComponent,
    ProductsListComponent,
    ProductsDetailComponent,
    MainPageComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [
      DepartmentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
