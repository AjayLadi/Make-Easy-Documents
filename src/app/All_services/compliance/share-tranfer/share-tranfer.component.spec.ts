import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareTranferComponent } from './share-tranfer.component';

describe('ShareTranferComponent', () => {
  let component: ShareTranferComponent;
  let fixture: ComponentFixture<ShareTranferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShareTranferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShareTranferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
