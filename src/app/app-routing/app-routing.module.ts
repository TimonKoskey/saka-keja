import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyListComponent } from '../property-list/property-list.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes : Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'listings/:type', component:PropertyListComponent}
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {
 
 }
