import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReissuePassportComponent } from './reissue-passport.component';

describe('ReissuePassportComponent', () => {
  let component: ReissuePassportComponent;
  let fixture: ComponentFixture<ReissuePassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReissuePassportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReissuePassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
