import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamechangeGazetteComponent } from './namechange-gazette.component';

describe('NamechangeGazetteComponent', () => {
  let component: NamechangeGazetteComponent;
  let fixture: ComponentFixture<NamechangeGazetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NamechangeGazetteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NamechangeGazetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
