import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovPvtLtdComponent } from './mov-pvt-ltd.component';

describe('MovPvtLtdComponent', () => {
  let component: MovPvtLtdComponent;
  let fixture: ComponentFixture<MovPvtLtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovPvtLtdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovPvtLtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
