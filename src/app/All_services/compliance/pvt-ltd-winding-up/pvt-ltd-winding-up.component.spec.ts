import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvtLtdWindingUpComponent } from './pvt-ltd-winding-up.component';

describe('PvtLtdWindingUpComponent', () => {
  let component: PvtLtdWindingUpComponent;
  let fixture: ComponentFixture<PvtLtdWindingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PvtLtdWindingUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PvtLtdWindingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
