import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Property } from '../models/property';
import * as _ from 'lodash';
@Injectable()
export class ListingsService {

  private propertyPath = '/properties';

  constructor(private fireDB: AngularFireDatabase) {
   }

  getAllHousesForRent(query= {}): Observable<any> {
   return this.fireDB.list(this.propertyPath, (q) => q.child('houses').child('for_rent')).valueChanges();
  }

  getAllHousesForSale() {
   return this.fireDB.list(this.propertyPath, (query) => query.child('houses').child('for_sale')).valueChanges();

  }

  getListing(properties: any[], searchedProperty: Property): any[] {
    let matches = [];
    if (!_.isEmpty(searchedProperty)) {
      _.forEach(properties, (property) => {
        if (this.match(property, searchedProperty)) {
        matches.push(property);
      }
    });
    } else {
      matches = properties;
    }

  return matches;

  }


  match(property, searchedProperty) {
    let match = false;
    _.isEqual(searchedProperty.location, property.location) && _.isEqual(searchedProperty.numberOfRooms, property.numberOfRooms)
    && property.rent >= searchedProperty.min_price && property.rent <= searchedProperty.max_price ?
    match = true : match = false;

    return match;
  }

}
