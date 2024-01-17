import { Food1 } from "./foods/food";

export class cartitem
{
    constructor(cartfood:Food1)// value which is given is shown here at cartfood of the Food1
    {
        this.cartfood=cartfood;
        this.price;

    }
    cartfood:Food1;
    quantity:number=1;// to assign default value we must have constructor
    get price()
    {
        
        return this.cartfood.price * this.quantity;
    }
}