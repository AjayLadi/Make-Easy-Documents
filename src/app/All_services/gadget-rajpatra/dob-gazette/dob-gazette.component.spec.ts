import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobGazetteComponent } from './dob-gazette.component';

describe('DobGazetteComponent', () => {
  let component: DobGazetteComponent;
  let fixture: ComponentFixture<DobGazetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DobGazetteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DobGazetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
