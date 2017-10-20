import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Property } from '../models/property';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  propertyTypes:any[]=[];
  someRange2config:any;
  someBuyRange2config:any;
  rentForm:FormGroup;
  buyForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router) {}

  ngOnInit() {

    this.someRange2config = {
      behaviour: 'drag',
      connect: true,
      range: {
        min:0,
        max:70000
      },
      tooltips:[true,true],
      step: 5000,  
      start:[20000,30000]
    };

    this.someBuyRange2config = {
      behaviour: 'drag',
      connect: true,
      range: {
        min:0,
        max:5000000
      },
      tooltips:[true,true],
      step: 100000,
      start:[20000,3000000]
    };

    this.rentForm = this.fb.group({
      propertyType:new FormControl("",Validators.required),
      price:new FormControl([20000,30000],Validators.required),
      location:new FormControl("",Validators.required),
      bedrooms:new FormControl("",Validators.required),
    });

    this.buyForm = this.fb.group({
      propertyType:new FormControl("",Validators.required),
      price:new FormControl([1000000,3000000],Validators.required),
      location:new FormControl("",Validators.required),
      size:new FormControl("",Validators.required)
    });

  }


  rentSearch(value){
   
    let property:Property={
     location : value.location,
     numberOfRooms : value.bedrooms,
      min_price : value.price[0],
      max_price : value.price[1]
    }; 
    
    this.router.navigate(['/listings','rent'],{queryParams:property});

  }

  buySearch(value){
    let property:Property={
      location : value.location,
      size : value.size,
      min_price : value.price[0],
      max_price : value.price[1]
     }; 
    this.router.navigate(['/listings','buy'],{queryParams:property});
  }

  

}
