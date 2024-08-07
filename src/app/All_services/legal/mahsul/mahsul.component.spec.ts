import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahsulComponent } from './mahsul.component';

describe('MahsulComponent', () => {
  let component: MahsulComponent;
  let fixture: ComponentFixture<MahsulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MahsulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MahsulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
