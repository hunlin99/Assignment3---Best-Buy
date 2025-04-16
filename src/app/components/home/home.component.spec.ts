import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: CLHomeComponent;
  let fixture: ComponentFixture<CLHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CLHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CLHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
