import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstUltComponent } from './gst-ult.component';

describe('GstUltComponent', () => {
  let component: GstUltComponent;
  let fixture: ComponentFixture<GstUltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GstUltComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GstUltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
