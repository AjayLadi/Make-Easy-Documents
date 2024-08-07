import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KisanPointComponent } from './kisan-point.component';

describe('KisanPointComponent', () => {
  let component: KisanPointComponent;
  let fixture: ComponentFixture<KisanPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KisanPointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KisanPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
