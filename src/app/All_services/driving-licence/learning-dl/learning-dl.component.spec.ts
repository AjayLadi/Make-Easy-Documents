import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningDLComponent } from './learning-dl.component';

describe('LearningDLComponent', () => {
  let component: LearningDLComponent;
  let fixture: ComponentFixture<LearningDLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearningDLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
