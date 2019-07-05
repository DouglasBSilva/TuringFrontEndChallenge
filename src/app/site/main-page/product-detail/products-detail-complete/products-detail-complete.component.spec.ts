import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailCompleteComponent } from './products-detail-complete.component';

describe('ProductsDetailCompleteComponent', () => {
  let component: ProductsDetailCompleteComponent;
  let fixture: ComponentFixture<ProductsDetailCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDetailCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDetailCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
