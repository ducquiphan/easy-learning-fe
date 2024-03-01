import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuizFromLessonComponent } from './create-quiz-from-lesson.component';

describe('CreateQuizFromLessonComponent', () => {
  let component: CreateQuizFromLessonComponent;
  let fixture: ComponentFixture<CreateQuizFromLessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQuizFromLessonComponent]
    });
    fixture = TestBed.createComponent(CreateQuizFromLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
