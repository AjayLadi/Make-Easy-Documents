import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineAccountantComponent } from './online-accountant.component';

describe('OnlineAccountantComponent', () => {
  let component: OnlineAccountantComponent;
  let fixture: ComponentFixture<OnlineAccountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlineAccountantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineAccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
