import {Product} from './product.model';

export class ProductComplete extends Product{

  public image: string;
  public image2: string;
  public display: string;

  constructor(
    product_id: number,
    name: string,
    description: string,
    price: string,
    discounted_price: string,
    thumbnail: string,
    image: string,
    image2: string,
    display: string
  ){
    super(product_id, name, description, price, discounted_price, thumbnail);
    this.image = image;
    this.image2 = image2;
    this.display = display;
  }
}
