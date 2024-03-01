import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutletContext, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LessonModule } from 'src/app/models/lesson/lesson.module';
import { ResponseObjectModule } from 'src/app/models/response-object/response-object.module';
import { UserModule } from 'src/app/models/user/user.module';
import { LessonService } from 'src/app/services/lesson.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.css']
})
export class LessonItemComponent implements OnInit {

  @Input() lesson!: LessonModule;
  // @Output() sendLessonEvent = new EventEmitter<LessonModule>();
  userInfo!: UserModule;
  observer!: Object;

  constructor(private lessonService: LessonService, private router: Router) { }


  ngOnInit(): void {
    console.log("lesson item:", this.lesson);
    this.lessonService.getUserInfoByIdLesson(this.lesson.id).subscribe((resp:any) => {
      this.userInfo = resp.data as UserModule;
      console.log("user creator ", this.userInfo);
    })
  }

  onGoToLesson() {
    // this.sendLessonEvent.emit(this.lesson);
    this.lessonService.lessonDetail$ = of(this.lesson);
    this.lessonService.userCreator$ = of(this.userInfo);
    this.router.navigate([`lesson`, this.lesson.id]);
  }


}
