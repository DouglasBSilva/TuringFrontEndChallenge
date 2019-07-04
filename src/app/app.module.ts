import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './site/main-page/nav-bar/nav-bar.component';
import {DepartmentsService} from './services/departments.service';
import {HttpClientModule} from '@angular/common/http';
import { CategoryListComponent } from './site/main-page/category-list/category-list.component';
import { SecondNavBarComponent } from './site/main-page/nav-bar/second-nav-bar/second-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CategoryListComponent,
    SecondNavBarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
      DepartmentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
