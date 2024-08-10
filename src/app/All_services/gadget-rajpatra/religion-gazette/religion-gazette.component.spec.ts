import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionGazetteComponent } from './religion-gazette.component';

describe('ReligionGazetteComponent', () => {
  let component: ReligionGazetteComponent;
  let fixture: ComponentFixture<ReligionGazetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReligionGazetteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReligionGazetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
