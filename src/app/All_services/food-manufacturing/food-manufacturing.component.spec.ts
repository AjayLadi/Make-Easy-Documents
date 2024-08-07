import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodManufacturingComponent } from './food-manufacturing.component';

describe('FoodManufacturingComponent', () => {
  let component: FoodManufacturingComponent;
  let fixture: ComponentFixture<FoodManufacturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodManufacturingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodManufacturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
