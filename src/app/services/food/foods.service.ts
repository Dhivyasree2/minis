import { Injectable } from '@angular/core';
import {Food1} from '../../shared/foods/food';
import { Tags } from 'src/app/shared/tags'
@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor() { }
  getbyId(value:number):Food1//a single object not an entrie object array
  {
    return this.AllFoodList().find(food=> food.id==value)!;
    
  }
  getAllTags():Tags[]//on the upper all tags and their count
  {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }
  getAllbytags(tagiteam:string):Food1[]
  {
    return       tagiteam=="All"?this.AllFoodList()://else
    this.AllFoodList().filter(food=>
      food.tags?.includes(tagiteam));
  }
  AllFoodList():Food1[]
  {
    return [
          {
            id: 1,
            name: 'Pizza Pepperoni',
            cookTime: '10-20',
            price: 10,
            favorite: false,
            origins: ['italy'],
            stars: 4.5,
            imageUrl:'assets/foods/pizza.jpg',
            tags: ['FastFood', 'Pizza', 'Lunch'],
          },
          {
            id: 2,
            name: 'Meatball',
            price: 20,
            cookTime: '20-30',
            favorite: true,
            origins: ['persia', 'middle east', 'china'],
            stars: 4.7,
            imageUrl: 'assets/foods/mball.jpg',
            tags: ['SlowFood', 'Lunch'],
          },
          {
            id: 3,
            name: 'Hamburger',
            price: 5,
            cookTime: '10-15',
            favorite: false,
            origins: ['germany', 'us'],
            stars: 3.5,
            imageUrl: 'assets/foods/burger.jpg',
            tags: ['FastFood', 'Hamburger'],
          },
          {
            id: 4,
            name: 'Fried Potatoes',
            price: 2,
            cookTime: '15-20',
            favorite: true,
            origins: ['belgium', 'france'],
            stars: 3.3,
            imageUrl:'assets/foods/friedpotato.jpg',
            tags: ['FastFood', 'Fry'],
          },
          {
            id: 5,
            name: 'Chicken Soup',
            price: 11,
            cookTime: '40-50',
            favorite: false,
            origins: ['india', 'asia'],
            stars: 3.0,
            imageUrl:'assets/foods/cs.jpg',
            tags: ['SlowFood', 'Soup'],
          },
          {
            id: 6,
            name: 'Vegetables Soup',
            price: 9,
            cookTime: '40-50',
            favorite: false,
            origins: ['italy'],
            stars: 4.0,
            imageUrl:'assets/foods/vs.jpg',
            tags: ['FastFood', 'Pizza', 'Lunch'],
          },
        ];
      }
    }










    