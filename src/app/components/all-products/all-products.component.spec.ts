import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLAllProductsComponent } from './all-products.component';

describe('AllProductsComponent', () => {
  let component: CLAllProductsComponent;
  let fixture: ComponentFixture<CLAllProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CLAllProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CLAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
