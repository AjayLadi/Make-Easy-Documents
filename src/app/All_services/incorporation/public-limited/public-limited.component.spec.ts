import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLimitedComponent } from './public-limited.component';

describe('PublicLimitedComponent', () => {
  let component: PublicLimitedComponent;
  let fixture: ComponentFixture<PublicLimitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicLimitedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicLimitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
