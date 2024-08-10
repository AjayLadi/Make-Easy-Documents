import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyGstComponent } from './apply-gst.component';

describe('ApplyGstComponent', () => {
  let component: ApplyGstComponent;
  let fixture: ComponentFixture<ApplyGstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplyGstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplyGstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
