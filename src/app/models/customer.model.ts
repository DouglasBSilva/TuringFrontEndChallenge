export class Customer{
  public customer_id : number;
  public name        : string;
  public email       : string;
  public address_1   : string;
  public address_2   : string;
  public city        : string;
  public region      : string;
  public postal_code : string;
  public country     : string;
  public shipping_region_id     : number;
  public day_phone   : string;
  public eve_phone   : string;
  public mob_phone   : string;
  public credit_card : string;

  constructor(
    customer_id : number,
    name        : string,
    email       : string,
    address_1   : string,
    address_2   : string,
    city        : string,
    region      : string,
    postal_code : string,
    country     : string,
    shipping_region_id     : number,
    day_phone   : string,
    eve_phone   : string,
    mob_phone   : string,
    credit_card : string
  ){
    this.customer_id = customer_id;
    this.name        = name;
    this.email       = email;
    this.address_1   = address_1;
    this.address_2   = address_2;
    this.city        = city;
    this.region      = region;
    this.postal_code = postal_code;
    this.country     = country;
    this.shipping_region_id     = shipping_region_id;
    this.day_phone   = day_phone;
    this.eve_phone   = eve_phone;
    this.mob_phone   = mob_phone;
    this.credit_card = credit_card ;
  }
}
