import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLessonComponent } from './my-lesson.component';

describe('MyLessonComponent', () => {
  let component: MyLessonComponent;
  let fixture: ComponentFixture<MyLessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyLessonComponent]
    });
    fixture = TestBed.createComponent(MyLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
