import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstServiceComponent } from './gst-service.component';

describe('GstServiceComponent', () => {
  let component: GstServiceComponent;
  let fixture: ComponentFixture<GstServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GstServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GstServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
