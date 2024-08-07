import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlpWindingUpComponent } from './llp-winding-up.component';

describe('LlpWindingUpComponent', () => {
  let component: LlpWindingUpComponent;
  let fixture: ComponentFixture<LlpWindingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LlpWindingUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LlpWindingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
