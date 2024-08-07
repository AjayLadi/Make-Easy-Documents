import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TahsilSevaComponent } from './tahsil-seva.component';

describe('TahsilSevaComponent', () => {
  let component: TahsilSevaComponent;
  let fixture: ComponentFixture<TahsilSevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TahsilSevaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TahsilSevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
