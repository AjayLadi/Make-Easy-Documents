import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InportExportComponent } from './inport-export.component';

describe('InportExportComponent', () => {
  let component: InportExportComponent;
  let fixture: ComponentFixture<InportExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InportExportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InportExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
