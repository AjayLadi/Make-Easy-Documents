import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstNilReturnFilingComponent } from './gst-nil-return-filing.component';

describe('GstNilReturnFilingComponent', () => {
  let component: GstNilReturnFilingComponent;
  let fixture: ComponentFixture<GstNilReturnFilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GstNilReturnFilingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GstNilReturnFilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
