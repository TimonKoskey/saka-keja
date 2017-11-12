import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../services/listings.service';
import { Property } from '../models/property';

@Component({
  selector: 'app-latest-properties',
  templateUrl: './latest-properties.component.html',
  styleUrls: ['./latest-properties.component.css']
})
export class LatestPropertiesComponent implements OnInit {
  property:Property;
  latestrent;
  latestsale;
  latest;

  constructor(private listingsService:ListingsService ) { }

  ngOnInit() {
    this.listingsService.getAllHousesForRent().subscribe((res) => {
      this.latestrent = this.listingsService.getListing(res,this.property);
    });
    this.listingsService.getAllHousesForSale().subscribe((res) => {
      this.latestsale= res;
      this.latest=this.listingsService.getLatest(this.latestrent,this.latestsale);
    });
    
  }
  

}
