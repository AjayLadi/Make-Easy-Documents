import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gstr9Component } from './gstr-9.component';

describe('Gstr9Component', () => {
  let component: Gstr9Component;
  let fixture: ComponentFixture<Gstr9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gstr9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Gstr9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
