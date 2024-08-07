import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfReturnFilingComponent } from './pf-return-filing.component';

describe('PfReturnFilingComponent', () => {
  let component: PfReturnFilingComponent;
  let fixture: ComponentFixture<PfReturnFilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PfReturnFilingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PfReturnFilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
