import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticTopLessonsComponent } from './statistic-top-lessons.component';

describe('StatisticTopLessonsComponent', () => {
  let component: StatisticTopLessonsComponent;
  let fixture: ComponentFixture<StatisticTopLessonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticTopLessonsComponent]
    });
    fixture = TestBed.createComponent(StatisticTopLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
