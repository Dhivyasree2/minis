import { Component, Input } from '@angular/core';
import { FoodsService } from '../services/food/foods.service';
import { Tags } from '../shared/tags';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  @Input()
  foodtag?:String[];
  tags?:Tags[];
  constructor(private foodservice:FoodsService)
  {

  }
  ngOnInit():void{
    if(!this.foodtag)//if no foodname then all if given then represent that array of names in tag array
    this.tags=this.foodservice.getAllTags();

  }

}
