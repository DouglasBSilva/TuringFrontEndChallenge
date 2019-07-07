import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckShippingAddressComponent } from './check-shipping-address.component';

describe('CheckShippingAddressComponent', () => {
  let component: CheckShippingAddressComponent;
  let fixture: ComponentFixture<CheckShippingAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckShippingAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckShippingAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
