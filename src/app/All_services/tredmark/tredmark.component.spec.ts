import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TredmarkComponent } from './tredmark.component';

describe('TredmarkComponent', () => {
  let component: TredmarkComponent;
  let fixture: ComponentFixture<TredmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TredmarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TredmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
