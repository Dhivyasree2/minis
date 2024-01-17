import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food1 } from '../shared/foods/food';
import { FoodsService } from '../services/food/foods.service';
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-foodpa',
  templateUrl: './foodpa.component.html',
  styleUrls: ['./foodpa.component.css']
})
export class FoodpaComponent {
  food!:Food1;
  constructor(private route:ActivatedRoute,private foodservice:FoodsService,private cartser:CartService,private router:Router)
  {

  }
  ngOnInit():void{
  this.route.params.subscribe(params=>
    {
      if(params['value'])
      {
        this.food=this.foodservice.getbyId(params['value']);
      }
    })
  }
  addcart()
  {
    this.cartser.addtocart(this.food);
    this.router.navigateByUrl("/cart-page");
  }


}
