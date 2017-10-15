import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
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
  constructor(private fb:FormBuilder,private fireDB:AngularFireDatabase) {}

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
      size:new FormControl("",Validators.required)
    });

    this.buyForm = this.fb.group({
      propertyType:new FormControl("",Validators.required),
      price:new FormControl([1000000,3000000],Validators.required),
      location:new FormControl("",Validators.required),
      size:new FormControl("",Validators.required)
    });

    this.fireDB.list('/properties').subscribe(res => this.propertyTypes = res);
    

  }


  rentSearch(value){
    let $key = value.propertyType;
    let propertyType = this.findPropertyTypeByKey($key,this.propertyTypes);
    propertyType['for_rent'].forEach((property)=>{
      if(property.location==value.location&&property.rent<=value.price[1]&&property.rent>=value.price[0]&&property.numberOfRooms<=value.bedrooms){
        console.log(property,"found");
      }
    });

  }

  buySearch(value){
    console.log(value);
  }

  findPropertyTypeByKey($key:string,propertyTypes:any[]){
    let prop:any;
    propertyTypes.forEach((propertyType) => {
      if(propertyType.$key==$key){
        prop = propertyType
      }
    });

    return prop;
  }

}
