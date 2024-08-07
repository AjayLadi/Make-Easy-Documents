import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditManagementAnalysisComponent } from './credit-management-analysis.component';

describe('CreditManagementAnalysisComponent', () => {
  let component: CreditManagementAnalysisComponent;
  let fixture: ComponentFixture<CreditManagementAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditManagementAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditManagementAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
