import { Injectable } from '@angular/core';
import { cart } from 'src/app/shared/cart';
import { cartitem } from 'src/app/shared/cartitem';
import { Food1 } from 'src/app/shared/foods/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartvalue:cart=new cart();
  addtocart(food:Food1):void{
    let cartproduct=this.cartvalue.carts.find(item=>
      item.cartfood.id==food.id);//carts is same as item and cartproduct is at cartitem
      if(cartproduct)
      {
        this.changequantity(food.id,cartproduct.quantity+1);
        return;
      }  
  this.cartvalue.carts.push(new cartitem(food));
    }
    removefromcart(foodId:number):void{
      this.cartvalue.carts=
    this.cartvalue.carts.filter(item=> item.cartfood.id!=foodId);
      }
      changequantity(foodId:number,quantity:number):void{
          let cid=this.cartvalue.carts.find(item=>item.cartfood.id==foodId);//cid is at cartitem
          if(!cid) return;
          cid.quantity=quantity;
      }
      getcart():cart
      {
        return this.cartvalue;
      }
}
