import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotterIdComponent } from './votter-id.component';

describe('VotterIdComponent', () => {
  let component: VotterIdComponent;
  let fixture: ComponentFixture<VotterIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VotterIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VotterIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
