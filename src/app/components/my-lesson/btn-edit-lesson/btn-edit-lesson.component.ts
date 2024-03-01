import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LessonModule } from 'src/app/models/lesson/lesson.module';
import { ImageServiceService } from 'src/app/services/image-service.service';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-btn-edit-my-lesson',
  templateUrl: './btn-edit-lesson.component.html',
  styleUrls: ['./btn-edit-lesson.component.css']
})
export class BtnEditMyLessonComponent implements OnInit, OnChanges {
  @Input() lesson!:LessonModule;
  @Output() updateEvent = new EventEmitter<void>();

  constructor(private lessonService:LessonService, private imageServie:ImageServiceService){}

  updateLessonForm = new FormGroup({
    title: new FormControl(""),
    description: new FormControl("")
  });

  ngOnChanges(changes: SimpleChanges): void {
    this.updateLessonForm.setValue({
      title: this.lesson.title,
      description: this.lesson.description
    });
  }


  ngOnInit(): void {

  }

  onUpdate(file:any){
    this.lesson.title = this.updateLessonForm.get("title")?.value || "";
    this.lesson.description = this.updateLessonForm.get("description")?.value || "";
    var formData = new FormData();
    console.log("file", file)
    if(file[0] != null){
      var publicIdImage = this.lesson.image.publicId.split('/', 2);
      formData.append("image", file[0])
      formData.append("folder", publicIdImage[0])
      formData.append("fileName", publicIdImage[1])
      this.imageServie.upadteImage(formData);
      console.log("update Imgage Success")
    }
    console.log("lesson", this.lesson)
    this.lessonService.updateMyLesson(this.lesson);
    setTimeout(() =>{
      this.updateEvent.emit()
    }, 5000)
    window.alert("Cập nhật bài học thành công")
  }
}
