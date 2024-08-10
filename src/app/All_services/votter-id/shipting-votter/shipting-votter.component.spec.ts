import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiptingVotterComponent } from './shipting-votter.component';

describe('ShiptingVotterComponent', () => {
  let component: ShiptingVotterComponent;
  let fixture: ComponentFixture<ShiptingVotterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShiptingVotterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShiptingVotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
