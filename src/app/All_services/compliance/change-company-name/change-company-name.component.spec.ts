import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCompanyNameComponent } from './change-company-name.component';

describe('ChangeCompanyNameComponent', () => {
  let component: ChangeCompanyNameComponent;
  let fixture: ComponentFixture<ChangeCompanyNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeCompanyNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeCompanyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
