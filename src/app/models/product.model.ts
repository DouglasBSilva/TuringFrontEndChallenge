

export class Product{
	public product_id: number;
	public name: string;
	public description: string;
	public price: string;
	public discounted_price: string;
	public thumbnail: string;

	constructor(
				product_id: number, 
				name: string, 
				description: string,
				price: string,
				discounted_price: string,
				thumbnail: string
				){
		this.product_id = product_id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.discounted_price = discounted_price;
		this.thumbnail = thumbnail;

	}
}
