import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstReturnFilingComponent } from './gst-return-filing.component';

describe('GstReturnFilingComponent', () => {
  let component: GstReturnFilingComponent;
  let fixture: ComponentFixture<GstReturnFilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GstReturnFilingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GstReturnFilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
