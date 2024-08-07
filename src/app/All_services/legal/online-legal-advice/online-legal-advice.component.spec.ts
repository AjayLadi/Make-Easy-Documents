import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineLegalAdviceComponent } from './online-legal-advice.component';

describe('OnlineLegalAdviceComponent', () => {
  let component: OnlineLegalAdviceComponent;
  let fixture: ComponentFixture<OnlineLegalAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlineLegalAdviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineLegalAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
