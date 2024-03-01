import { flatMap } from 'rxjs/operators';
import { ImageServiceService } from 'src/app/services/image-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.css']
})

export class CreateLessonComponent {
  createLessonF: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private lessonSrv: LessonService,
    private imageService: ImageServiceService) {
    this.createLessonF = this.fb.group({
      title: [''],
      description: [''],
      questions: this.fb.array([
        this.createQuestionFormGroup()
      ])
    });
  }

  createQuestionFormGroup(): FormGroup {
    return this.fb.group({
      question: [''],
      answerA: [''],
      answerB: [''],
      answerC: [''],
      correctAnswer: ['']
    });
  }
  get questionForms() {
    return this.createLessonF.get('questions') as FormArray;
  }

  addQuestion(): void {
    this.questionForms.push(this.createQuestionFormGroup());
  }

  onCreateLesson(): void {
    const lessonData = this.createLessonF.value;
    const questions = lessonData.questions;
    
    var imgForm = new FormData();
    imgForm.append('image', (<HTMLInputElement>document.getElementById('image')).files[0]);

    this.imageService.uploadImage(imgForm).pipe(
      flatMap((imageRes: any) => {
        lessonData.image = imageRes.data;
        return this.lessonSrv.create(lessonData, questions);
      })
      ).subscribe(
        (res: any) => {
          alert("Create lesson success");
        },
        (error: any) => {
        }
      );
  }
}
