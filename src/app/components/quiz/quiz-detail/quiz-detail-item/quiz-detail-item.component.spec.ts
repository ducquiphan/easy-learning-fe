import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDetailItemComponent } from './quiz-detail-item.component';

describe('QuizDetailItemComponent', () => {
  let component: QuizDetailItemComponent;
  let fixture: ComponentFixture<QuizDetailItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizDetailItemComponent]
    });
    fixture = TestBed.createComponent(QuizDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
