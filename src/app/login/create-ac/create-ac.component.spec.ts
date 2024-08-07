import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcComponent } from './create-ac.component';

describe('CreateAcComponent', () => {
  let component: CreateAcComponent;
  let fixture: ComponentFixture<CreateAcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
