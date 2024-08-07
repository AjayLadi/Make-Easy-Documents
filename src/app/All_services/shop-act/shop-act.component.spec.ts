import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopActComponent } from './shop-act.component';

describe('ShopActComponent', () => {
  let component: ShopActComponent;
  let fixture: ComponentFixture<ShopActComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopActComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
