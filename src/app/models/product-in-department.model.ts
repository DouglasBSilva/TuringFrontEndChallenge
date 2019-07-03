import {Product} from './product.model';

export class ProductInDepartment extends Product{
  
  constructor(
    product_id: number,
    name: string,
    description: string,
    price: string,
    discounted_price: string,
    thumbnail: string
  ){
    super(product_id, name, description, price, discounted_price, thumbnail);
  }
}
