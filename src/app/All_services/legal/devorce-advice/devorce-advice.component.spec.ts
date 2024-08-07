import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevorceAdviceComponent } from './devorce-advice.component';

describe('DevorceAdviceComponent', () => {
  let component: DevorceAdviceComponent;
  let fixture: ComponentFixture<DevorceAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevorceAdviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevorceAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
