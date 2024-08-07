import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetRajpatraComponent } from './gadget-rajpatra.component';

describe('GadgetRajpatraComponent', () => {
  let component: GadgetRajpatraComponent;
  let fixture: ComponentFixture<GadgetRajpatraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GadgetRajpatraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GadgetRajpatraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
