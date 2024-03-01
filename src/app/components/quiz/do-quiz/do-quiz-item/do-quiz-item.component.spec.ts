import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoQuizItemComponent } from './do-quiz-item.component';

describe('QuizComponent', () => {
  let component: DoQuizItemComponent;
  let fixture: ComponentFixture<DoQuizItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoQuizItemComponent]
    });
    fixture = TestBed.createComponent(DoQuizItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
