import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianRegistrationComponent } from './indian-registration.component';

describe('IndianRegistrationComponent', () => {
  let component: IndianRegistrationComponent;
  let fixture: ComponentFixture<IndianRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndianRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndianRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
