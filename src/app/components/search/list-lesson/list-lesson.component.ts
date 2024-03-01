import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LessonModule } from 'src/app/models/lesson/lesson.module';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-list-lesson',
  templateUrl: './list-lesson.component.html',
  styleUrls: ['./list-lesson.component.css'],
})
export class ListLessonComponent implements OnInit {

  lessons$!: Observable<LessonModule[]>;

  constructor(private lessonService: LessonService){}

  ngOnInit(): void {
    this.lessons$ = this.lessonService.lessons$;
  }

}
