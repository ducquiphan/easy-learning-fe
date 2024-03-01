import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLessonDetailComponent } from './my-lesson-detail.component';

describe('MyLessonDetailComponent', () => {
  let component: MyLessonDetailComponent;
  let fixture: ComponentFixture<MyLessonDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyLessonDetailComponent]
    });
    fixture = TestBed.createComponent(MyLessonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
