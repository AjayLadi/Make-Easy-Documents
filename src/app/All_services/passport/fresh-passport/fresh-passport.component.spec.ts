import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshPassportComponent } from './fresh-passport.component';

describe('FreshPassportComponent', () => {
  let component: FreshPassportComponent;
  let fixture: ComponentFixture<FreshPassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreshPassportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreshPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
