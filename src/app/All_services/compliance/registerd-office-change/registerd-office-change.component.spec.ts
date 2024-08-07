import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdOfficeChangeComponent } from './registerd-office-change.component';

describe('RegisterdOfficeChangeComponent', () => {
  let component: RegisterdOfficeChangeComponent;
  let fixture: ComponentFixture<RegisterdOfficeChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterdOfficeChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterdOfficeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
