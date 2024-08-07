import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePersonComponent } from './one-person.component';

describe('OnePersonComponent', () => {
  let component: OnePersonComponent;
  let fixture: ComponentFixture<OnePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnePersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
