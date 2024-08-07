import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstModificationComponent } from './gst-modification.component';

describe('GstModificationComponent', () => {
  let component: GstModificationComponent;
  let fixture: ComponentFixture<GstModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GstModificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GstModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
