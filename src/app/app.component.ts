import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  homeNavbarStyle:boolean = true;
  constructor(private router:Router){
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        let url = event.url;
        if(url!='/home'){
          this.homeNavbarStyle = false;
        }
        else{
          console.log(url);
          this.homeNavbarStyle = true; //homeNavbarStyle is a transparent navbar
        }
      }
    });
  }
  ngOnInit(){

   
  }
}
