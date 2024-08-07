import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JansamarthRegistrationComponent } from './jansamarth-registration.component';

describe('JansamarthRegistrationComponent', () => {
  let component: JansamarthRegistrationComponent;
  let fixture: ComponentFixture<JansamarthRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JansamarthRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JansamarthRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
