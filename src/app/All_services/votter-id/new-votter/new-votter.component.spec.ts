import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVotterComponent } from './new-votter.component';

describe('NewVotterComponent', () => {
  let component: NewVotterComponent;
  let fixture: ComponentFixture<NewVotterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewVotterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewVotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
