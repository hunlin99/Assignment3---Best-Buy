import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLCategoryComponent } from './category.component';

describe('CategoryComponent', () => {
  let component: CLCategoryComponent;
  let fixture: ComponentFixture<CLCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CLCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CLCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
