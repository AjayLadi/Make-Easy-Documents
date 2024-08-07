import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovalDirectorComponent } from './removal-director.component';

describe('RemovalDirectorComponent', () => {
  let component: RemovalDirectorComponent;
  let fixture: ComponentFixture<RemovalDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemovalDirectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemovalDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
