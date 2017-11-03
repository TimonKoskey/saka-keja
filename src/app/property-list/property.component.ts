import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../models/property';
import { Router } from '@angular/router';
@Component({
    selector: 'app-property',
    templateUrl: './property.html',
    styleUrls: ['./property.css']
})
export class PropertyComponent implements OnInit {
    @Input() property: Property;

    constructor( private router: Router) { }

    ngOnInit() { }

    navigate() {

        this.router.navigate(['/listing']);
    }
}
