import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticTopQuizzesComponent } from './statistic-top-quizzes.component';

describe('StatisticTopQuizzesComponent', () => {
  let component: StatisticTopQuizzesComponent;
  let fixture: ComponentFixture<StatisticTopQuizzesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticTopQuizzesComponent]
    });
    fixture = TestBed.createComponent(StatisticTopQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
