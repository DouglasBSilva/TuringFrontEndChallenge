import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService, FacebookLoginProvider} from 'angular-6-social-login';
import {environment} from '../../environments/environment';
import {of} from 'rxjs/internal/observable/of';
import {Customer} from '@models/customer.model';
import {Observable} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';
declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private base_url = '/customers';
  static _customer: Customer = new Customer();

  get user(): Customer {
      return CustomersService._customer;
  }

    set user(customer: Customer) {
        CustomersService._customer = customer;
    }

  constructor(private client: HttpClient, private socialAuthService: AuthService) {}

  public loginFacebookTuringApi(accessToken: string): Observable<any> {
    return this.client.post(environment.api_url + this.base_url + '/facebook', { access_token: accessToken});
  }

  public logout() {
      localStorage.setItem('facebookToken', '');
      localStorage.setItem('accessToken', '');
      this.user = new Customer();
      return true;
  }

  public loginFacebookApi(): Observable<any> {
    return fromPromise(this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID))
        .pipe(
            switchMap( userData => {
                localStorage.setItem('facebookToken', userData.token);
                return this.loginFacebookTuringApi(userData.token);
            }), catchError( error => {
                localStorage.setItem('facebookToken', '');
                return of();
            })
        );
  }
  public updateCreditCard(credit_card: string): Observable<any> {
        return this.client.put(environment.api_url + this.base_url + '/creditCard',{credit_card: credit_card});
  }

    public updateAddress(user: Customer): Observable<any> {
        return this.client.put(environment.api_url + this.base_url + '/address', user);
    }


  public find(): Observable<any>{
      return this.client.get(environment.api_url + '/customer');
  }

  public login(email: string, password: string): Observable<any>{
      return this.client.post(environment.api_url + this.base_url + '/login',{email: email, password: password});
  }


    public register(name: string, email: string, password: string): Observable<any>{
        return this.client.post(environment.api_url + this.base_url,{name: name , email: email, password: password});
    }

}
