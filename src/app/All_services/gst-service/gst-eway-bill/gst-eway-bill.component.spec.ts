import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstEwayBillComponent } from './gst-eway-bill.component';

describe('GstEwayBillComponent', () => {
  let component: GstEwayBillComponent;
  let fixture: ComponentFixture<GstEwayBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GstEwayBillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GstEwayBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
