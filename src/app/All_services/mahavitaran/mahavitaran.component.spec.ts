import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahavitaranComponent } from './mahavitaran.component';

describe('MahavitaranComponent', () => {
  let component: MahavitaranComponent;
  let fixture: ComponentFixture<MahavitaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MahavitaranComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MahavitaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
