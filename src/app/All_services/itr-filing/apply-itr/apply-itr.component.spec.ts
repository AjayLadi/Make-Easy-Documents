import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyItrComponent } from './apply-itr.component';

describe('ApplyItrComponent', () => {
  let component: ApplyItrComponent;
  let fixture: ComponentFixture<ApplyItrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplyItrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplyItrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
