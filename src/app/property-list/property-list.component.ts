import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Property } from '../models/property';
import { ListingsService } from '../services/listings.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
  providers: [ListingsService]
})
export class PropertyListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  propertyType: string;
  property: Property;
  searchResults: any[];
  loading: boolean;
  constructor(private route:ActivatedRoute,private listingsService:ListingsService) { }

  ngOnInit() {
    this.loading = true;
    this.subscription = this.route.paramMap.subscribe((paramMap) =>{
      this.propertyType = paramMap.get('type');
      this.subscription = this.route.queryParams.subscribe((queryParams) =>{
        this.property = queryParams as Property;

        if(this.propertyType == 'rent'){
          this.listingsService.getAllHousesForRent().subscribe((res) => {
                    this.searchResults = this.listingsService.getListing(res,this.property);
                    this.loading = false;
                  });
        } 


        else{
          this.listingsService.getAllHousesForSale().subscribe((res) => {
            this.searchResults = res;
            this.loading = false;

                    });
        }
        
      })
    });

  
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
