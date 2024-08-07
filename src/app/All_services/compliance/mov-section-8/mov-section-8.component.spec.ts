import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovSection8Component } from './mov-section-8.component';

describe('MovSection8Component', () => {
  let component: MovSection8Component;
  let fixture: ComponentFixture<MovSection8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovSection8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovSection8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
