import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPropertiesComponent } from './latest-properties.component';

describe('LatestPropertiesComponent', () => {
  let component: LatestPropertiesComponent;
  let fixture: ComponentFixture<LatestPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
