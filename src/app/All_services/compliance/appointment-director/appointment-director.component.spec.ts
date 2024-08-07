import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDirectorComponent } from './appointment-director.component';

describe('AppointmentDirectorComponent', () => {
  let component: AppointmentDirectorComponent;
  let fixture: ComponentFixture<AppointmentDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentDirectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
