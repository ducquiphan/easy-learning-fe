import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLessonsComponent } from './manage-lessons.component';

describe('ManageLessonsComponent', () => {
  let component: ManageLessonsComponent;
  let fixture: ComponentFixture<ManageLessonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageLessonsComponent]
    });
    fixture = TestBed.createComponent(ManageLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
