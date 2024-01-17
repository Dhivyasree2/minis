import { Component,OnInit } from '@angular/core';
import { FoodsService } from '../services/food/foods.service';
import {Food1} from '../shared/foods/food';
import {ActivatedRoute,Router} from '@angular/router'
//href in anchor tag ku bathil ha tha routerLink
//ActivatedRoute apdina athu url nadakura changes ha pathutae irukum and athuku etha action edukum
//if Food1 is the return type then returns the one object from the object array
//if Food1[] is the return type then returns the object array
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent{
  foods!:Food1[];
  //dependency injection
  constructor(private foodservices:FoodsService,private route:ActivatedRoute,private router:Router)
  {

  }
  ngOnInit():void{
    //if any changes in searchterm then params calls the subscribe()
    this.route.params.subscribe(params =>{
      if(params['searchTerm'])//true
      {
        this.foods=this.foodservices.AllFoodList().filter(food =>
            food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
            if(this.foods.length==0)//no matching user request with the available fod's
            {
            this.router.navigateByUrl("");
            }
        }
      else if(params['tagi'])
      {
        this.foods=this.foodservices.getAllbytags(params['tagi'])
      }
      else
      {
        this.foods=this.foodservices.AllFoodList();
      }
      }
      )
  }

}
