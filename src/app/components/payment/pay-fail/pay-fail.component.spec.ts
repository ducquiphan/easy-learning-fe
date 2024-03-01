import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFailComponent } from './pay-fail.component';

describe('PayFailComponent', () => {
  let component: PayFailComponent;
  let fixture: ComponentFixture<PayFailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayFailComponent]
    });
    fixture = TestBed.createComponent(PayFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
