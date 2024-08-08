import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPanComponent } from './company-pan.component';

describe('CompanyPanComponent', () => {
  let component: CompanyPanComponent;
  let fixture: ComponentFixture<CompanyPanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyPanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
