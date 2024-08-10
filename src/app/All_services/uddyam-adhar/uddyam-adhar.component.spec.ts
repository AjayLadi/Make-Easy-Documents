import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UddyamAdharComponent } from './uddyam-adhar.component';

describe('UddyamAdharComponent', () => {
  let component: UddyamAdharComponent;
  let fixture: ComponentFixture<UddyamAdharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UddyamAdharComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UddyamAdharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
