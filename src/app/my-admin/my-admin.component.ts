import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../services/listings.service';
//import { HttpClient } from '@angular/common/http';
import { Property } from '../models/property';

@Component({
  selector: 'app-my-admin',
  templateUrl: './my-admin.component.html',
  styleUrls: ['./my-admin.component.css']
})
export class MyAdminComponent implements OnInit {
  all_properties_for_sale;
  all_properties_for_rent;
  propery:Property;
  constructor(private listingservice:ListingsService) { }

  ngOnInit():void{
    this.listingservice.getAllHousesForRent().subscribe((res)=>{
      this.all_properties_for_rent=this.listingservice.getListing(res,this.propery);
    });
  }

}
