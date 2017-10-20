import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Property } from '../models/property';
import { ListingsService } from '../services/listings.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
  providers: [ListingsService]
})
export class PropertyListComponent implements OnInit,OnDestroy {

  private subscription:Subscription;
  propertyType:string;
  property:Property;
  searchResults:any[];
  constructor(private route:ActivatedRoute,private listingsService:ListingsService) { }

  ngOnInit() {
  
    this.subscription = this.route.paramMap.subscribe((paramMap) =>{
      this.propertyType = paramMap.get('type');
      this.subscription = this.route.queryParams.subscribe((queryParams) =>{
        if(!_.isEmpty(queryParams)){
          this.property = queryParams as Property;
                  
                  this.listingsService.getAllHousesForRent().subscribe((res) => {
                    this.searchResults = this.listingsService.getHouseForRent(res,this.property);
                  });
        }


        else{
          this.listingsService.getAllHousesForRent().subscribe((res) =>{
            console.log(res);
            this.searchResults = res;
                    });
        }
        
      })
    });

  
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
