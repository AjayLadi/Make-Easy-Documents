import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComRegiComponent } from './com-regi.component';

describe('ComRegiComponent', () => {
  let component: ComRegiComponent;
  let fixture: ComponentFixture<ComRegiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComRegiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComRegiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
