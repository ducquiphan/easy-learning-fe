import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonItemComponent } from './lesson-item.component';

describe('LessonItemComponent', () => {
  let component: LessonItemComponent;
  let fixture: ComponentFixture<LessonItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonItemComponent]
    });
    fixture = TestBed.createComponent(LessonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
