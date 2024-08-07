import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanantDLComponent } from './permanant-dl.component';

describe('PermanantDLComponent', () => {
  let component: PermanantDLComponent;
  let fixture: ComponentFixture<PermanantDLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermanantDLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermanantDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
