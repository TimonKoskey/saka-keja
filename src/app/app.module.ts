import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LatestPropertiesComponent } from './latest-properties/latest-properties.component';
import { ContactComponent } from './contact/contact.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyComponent } from './property-list/property.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { CarouselComponent } from './property-detail/carousel.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LatestPropertiesComponent,
    ContactComponent,
    PropertyListComponent,
    PropertyComponent,
    PropertyDetailComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NouisliderModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NouisliderModule,
    AppRoutingModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule {}
