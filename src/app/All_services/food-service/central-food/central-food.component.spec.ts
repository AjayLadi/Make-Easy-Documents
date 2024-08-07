import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralFoodComponent } from './central-food.component';

describe('CentralFoodComponent', () => {
  let component: CentralFoodComponent;
  let fixture: ComponentFixture<CentralFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CentralFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CentralFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
