import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LessonModule } from 'src/app/models/lesson/lesson.module';
import { QuizModule } from 'src/app/models/quiz/quiz.module';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-my-lesson-detail',
  templateUrl: './my-lesson-detail.component.html',
  styleUrls: ['./my-lesson-detail.component.css']
})
export class MyLessonDetailComponent implements OnInit {
  @Input() id ='';
  lesson!: LessonModule;
  size = 0;
  index = 1;
  constructor(private lessonService: LessonService) { }
  // ngDoCheck(): void {
  //   this.lessonService.getLessonById(parseInt(this.id))
  // }

  ngOnInit(): void {
    console.log(this.id);
    this.lessonService.getMyLessonById(parseInt(this.id))
    this.lessonService.lessonDetail$.subscribe(resp => {
      this.lesson = resp as LessonModule;
      this.size = this.lesson.questions.length;
    })
  }

  onRefresh(){
    this.lessonService.getMyLessonById(parseInt(this.id))
    this.lessonService.lessonDetail$.subscribe(resp => {
      this.lesson = resp as LessonModule;
      this.size = this.lesson.questions.length;
    })
    console.log("is refresh")
  }

  increase(){
    if(this.index < this.size){
      this.index++;
    }else{
      this.index = 1;
    }
  }

  reduce(){
    if(this.index > 1){
      this.index--;
    }else{
      this.index = this.size;
    }
  }
}
