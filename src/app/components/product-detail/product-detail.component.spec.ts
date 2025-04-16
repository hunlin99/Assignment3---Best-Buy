import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLProductDetailComponent } from './product-detail.component';

describe('ProductDetailComponent', () => {
  let component: CLProductDetailComponent;
  let fixture: ComponentFixture<CLProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CLProductDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CLProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
