import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllservicePageComponent } from './allservice-page.component';

describe('AllservicePageComponent', () => {
  let component: AllservicePageComponent;
  let fixture: ComponentFixture<AllservicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllservicePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllservicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
