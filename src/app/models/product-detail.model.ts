import {Product} from './product.model';

export class ProductDetail extends Product{

  public image: string;
  public image2: string;

  constructor(
    product_id: number,
    name: string,
    description: string,
    price: string,
    discounted_price: string,
    image: string,
    image2: string,
  ){
    super(product_id, name, description, price, discounted_price, null);
    this.image = image;
    this.image2 = image2;
  }
}
