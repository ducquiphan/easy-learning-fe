import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelaccountComponent } from './modelaccount.component';

describe('ModelaccountComponent', () => {
  let component: ModelaccountComponent;
  let fixture: ComponentFixture<ModelaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelaccountComponent]
    });
    fixture = TestBed.createComponent(ModelaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
