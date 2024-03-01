import { Component, DoCheck, Input, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';
import { LessonModule } from 'src/app/models/lesson/lesson.module';
import { QuizModule } from 'src/app/models/quiz/quiz.module';
import { LessonService } from 'src/app/services/lesson.service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit, OnDestroy {
  @Input() id = '';
  lesson!: LessonModule;
  size = 0;
  index = 1;
  observer!: Subscription;
  checkEdit = false;
  constructor(private lessonService: LessonService, private userService: UserService) { }
  ngOnDestroy(): void {
    this.observer.unsubscribe;
    console.log('destroy')
  }
  // ngDoCheck(): void {
  //   this.lessonService.getLessonById(parseInt(this.id))
  // }

  ngOnInit(): void {
    console.log("dsfsd",this.id);
    this.lessonService.getLessonById(parseInt(this.id))
    this.observer = this.lessonService.lessonDetail$.subscribe(resp => {
      this.lesson = resp as LessonModule;
      this.size = this.lesson.questions.length;
      this.checkEdit = (this.lesson.userInfo.id === this.userService.userLogin.id);
      console.log("check nè: ", this.checkEdit);
    })
  }

  // setLessonDetail(lesson: LessonModule) {
  //   this.lesson = lesson;
  // }

  onRefresh() {
    this.lessonService.getLessonById(parseInt(this.id))
    this.lessonService.lessonDetail$.subscribe(resp => {
      this.lesson = resp as LessonModule;
      this.size = this.lesson.questions.length;
    })
    this.checkEdit = (this.lesson.userInfo.id === this.userService.userLogin.id);
    console.log("is refresh")
  }

  increase() {
    if (this.index < this.size) {
      this.index++;
    } else {
      this.index = 1;
    }
  }

  reduce() {
    if (this.index > 1) {
      this.index--;
    } else {
      this.index = this.size;
    }
  }
}
