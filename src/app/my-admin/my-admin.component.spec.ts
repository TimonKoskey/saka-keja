import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdminComponent } from './my-admin.component';

describe('MyAdminComponent', () => {
  let component: MyAdminComponent;
  let fixture: ComponentFixture<MyAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
