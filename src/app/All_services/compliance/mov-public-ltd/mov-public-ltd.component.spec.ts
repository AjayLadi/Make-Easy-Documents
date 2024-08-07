import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovPublicLtdComponent } from './mov-public-ltd.component';

describe('MovPublicLtdComponent', () => {
  let component: MovPublicLtdComponent;
  let fixture: ComponentFixture<MovPublicLtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovPublicLtdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovPublicLtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
