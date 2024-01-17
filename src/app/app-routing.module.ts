import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { FoodpaComponent } from './foodpa/foodpa.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { NomatchfoundComponent } from './nomatchfound/nomatchfound.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'tags/:tagi',component:HomeComponent},
  {path:'foods/:value',component:FoodpaComponent},//particular food page
  {path:'cart-page',component:CartPageComponent},//this routeLink is in the header component as cart button
  {path:'checkout',component:CheckOutComponent},
  {path:'nomatchfound',component:NomatchfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }