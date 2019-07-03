import {Customer} from './customer.model';

export class CustomerRegister {
  public customer: Customer[];
  public accessToken: string;
  public expires_in: string;

  constructor(
    customer: Customer[],
    accessToken: string,
    expires_in: string
  ){
  this.customer = customer;
  this.accessToken = accessToken;
  this.expires_in = expires_in;
  }
}
