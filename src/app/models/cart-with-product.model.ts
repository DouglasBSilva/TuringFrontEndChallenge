export class CartWithProduct {
    public item_id: number;
    public name: number;
    public attributes: string;
    public product_id: number;
    public price: string;
    public quantity: number;
    public image: string;
    public subtotal: string;

    constructor(
        item_id: number,
        name: number,
        attributes: string,
        product_id: number,
        price: string,
        quantity: number,
        image: string,
        subtotal: string
    ){
        this.item_id = item_id;
        this.name = name;
        this.attributes = attributes;
        this.product_id = product_id;
        this.price = price;
        this.image = image;
        this.quantity = quantity;
        this.subtotal = subtotal;
    }



}
