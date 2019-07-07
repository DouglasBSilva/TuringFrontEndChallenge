import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './site/main-page/nav-bar/nav-bar.component';
import {DepartmentsService} from './services/departments.service';
import { CategoryListComponent } from './site/main-page/category-list/category-list.component';
import { SecondNavBarComponent } from './site/main-page/nav-bar/second-nav-bar/second-nav-bar.component';
import { ProductsListComponent } from './site/main-page/products/products-list/products-list.component';
import { ProductsDetailComponent } from './site/main-page/products/products-detail/products-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainPageComponent } from './site/main-page/main-page.component';
import { ProductsDetailCompleteComponent } from './site/main-page/products/products-detail-complete/products-detail-complete.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ListReviewsComponent } from './site/main-page/products/products-detail-complete/list-reviews/list-reviews.component';
import { LoginComponent } from './site/auth/login/login.component';
import { RegisterComponent } from './site/auth/register/register.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ToastrModule } from 'ngx-toastr';
import {
    SocialLoginModule,
    AuthServiceConfig,
    FacebookLoginProvider,
} from 'angular-6-social-login';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientInterceptor} from './interceptors/http-client.interceptor';
import {CommonModule} from '@angular/common';
import { EditUserComponent } from './site/user/edit-user/edit-user.component';
import { DetailUserComponent } from './site/user/detail-user/detail-user.component';
import { CartListComponent } from './site/main-page/cart/cart-list/cart-list.component';
import { CartComponent } from './site/main-page/cart/cart.component';
import { CheckShippingAddressComponent } from './site/shipping/check-shipping-address/check-shipping-address.component';
import { PaymentFormComponent } from './site/shipping/payment-form/payment-form.component';
import { NgxStripeModule } from 'ngx-stripe';

export function getAuthServiceConfigs() {
    const config = new AuthServiceConfig(
        [
            {
                id: FacebookLoginProvider.PROVIDER_ID,
                provider: new FacebookLoginProvider('352854622106208')
            }
        ]);
    return config;
}


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CategoryListComponent,
    SecondNavBarComponent,
    ProductsListComponent,
    ProductsDetailComponent,
    MainPageComponent,
    ProductsDetailCompleteComponent,
    ListReviewsComponent,
    LoginComponent,
    RegisterComponent,
    EditUserComponent,
    DetailUserComponent,
    CartListComponent,
    CartComponent,
    CheckShippingAddressComponent,
    PaymentFormComponent
  ],
    imports: [
        NgxStripeModule.forRoot('pk_test_NcwpaplBCuTL6I0THD44heRe'),
        CommonModule,
        ModalModule.forRoot(),
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        SocialLoginModule,
        FormsModule,
        AlertModule.forRoot(),
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(), // ToastrModule added
        ReactiveFormsModule
    ],
    entryComponents: [
        ProductsDetailCompleteComponent,
        LoginComponent,
        RegisterComponent,
        DetailUserComponent,
        CartComponent,
        CheckShippingAddressComponent,
        PaymentFormComponent

    ],
  providers: [
      DepartmentsService,
      {
          provide: AuthServiceConfig,
          useFactory: getAuthServiceConfigs
      },
      { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
