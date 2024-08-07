import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseAuthorizedCapitalComponent } from './increase-authorized-capital.component';

describe('IncreaseAuthorizedCapitalComponent', () => {
  let component: IncreaseAuthorizedCapitalComponent;
  let fixture: ComponentFixture<IncreaseAuthorizedCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncreaseAuthorizedCapitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncreaseAuthorizedCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
