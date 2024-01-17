import { Component,OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
//ActivatedRoute is reading from the route and Router is writing to the route
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchterm:String="";
constructor(private route:ActivatedRoute,private router:Router)
{

}
ngOninit():void
{ 
  this.route.params.subscribe(params =>
    {
      if(params['searchterm'])
      {
        this.searchterm=params['searchterm']
      }
    })
}
searchurl():void{
  //to identify null or non-null values in the search places
  if(this.searchterm)
  {
    this.router.navigateByUrl('search/'+this.searchterm)
  }
  if(this.searchterm=="")
  {
    this.router.navigateByUrl("")
  }
}

}
