import { Component, Input } from '@angular/core';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-btn-delete-my-lesson',
  templateUrl: './btn-delete-lesson.component.html',
  styleUrls: ['./btn-delete-lesson.component.css']
})
export class BtnDeleteMyLessonComponent {
  @Input() id!:string;
  constructor(private lessonService:LessonService){}

  onDelete(){
    this.lessonService.deleteMyLesson(this.id);
    window.alert("Xóa bài học thành công");
  }
}
