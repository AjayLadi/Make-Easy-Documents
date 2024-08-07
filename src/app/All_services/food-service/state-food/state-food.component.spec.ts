import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateFoodComponent } from './state-food.component';

describe('StateFoodComponent', () => {
  let component: StateFoodComponent;
  let fixture: ComponentFixture<StateFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StateFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StateFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
