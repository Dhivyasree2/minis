import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { cart } from '../shared/cart';
import { Food1 } from '../shared/foods/food';
import { cartitem } from '../shared/cartitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartval!:cart;
constructor(private cartser:CartService,private router:Router)
{
this.setcart(); //initialise the page with the items from getcart() in cartservice
}
removefromcart(cartit:cartitem):void{
  this.cartser.removefromcart(cartit.cartfood.id);
  this.setcart();//refresh
}
changequantity(cartit:cartitem,quantityinstring:string):void
{
  const q=parseInt(quantityinstring);
  this.cartser.changequantity(cartit.cartfood.id,q);
  this.setcart();//refresh
}
ngOnInit():void{
}
setcart():void{
  this.cartval=this.cartser.getcart();
  if(!this.cartval)
  {
    this.router.navigateByUrl("");
  }
}
}
