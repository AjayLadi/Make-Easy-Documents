import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewDLComponent } from './renew-dl.component';

describe('RenewDLComponent', () => {
  let component: RenewDLComponent;
  let fixture: ComponentFixture<RenewDLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenewDLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RenewDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
