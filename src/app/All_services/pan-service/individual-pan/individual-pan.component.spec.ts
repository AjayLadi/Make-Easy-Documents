import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualPanComponent } from './individual-pan.component';

describe('IndividualPanComponent', () => {
  let component: IndividualPanComponent;
  let fixture: ComponentFixture<IndividualPanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualPanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
