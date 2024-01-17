import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StarRatingModule } from 'angular-star-rating';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { TagComponent } from './tag/tag.component';
import { FoodpaComponent } from './foodpa/foodpa.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { NomatchfoundComponent } from './nomatchfound/nomatchfound.component';
import { CartpageemptyComponent } from './cartpageempty/cartpageempty.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagComponent,
    FoodpaComponent,
    CartPageComponent,
    CheckOutComponent,
    NomatchfoundComponent,
    CartpageemptyComponent
  ],
  exports:
  [
    StarRatingModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StarRatingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
