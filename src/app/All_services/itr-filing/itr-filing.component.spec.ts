import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItrFilingComponent } from './itr-filing.component';

describe('ItrFilingComponent', () => {
  let component: ItrFilingComponent;
  let fixture: ComponentFixture<ItrFilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItrFilingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItrFilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
