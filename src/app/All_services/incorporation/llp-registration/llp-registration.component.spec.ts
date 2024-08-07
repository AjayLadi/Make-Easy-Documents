import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlpRegistrationComponent } from './llp-registration.component';

describe('LlpRegistrationComponent', () => {
  let component: LlpRegistrationComponent;
  let fixture: ComponentFixture<LlpRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LlpRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LlpRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
