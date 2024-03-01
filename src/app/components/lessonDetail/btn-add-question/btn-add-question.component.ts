import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LessonService } from 'src/app/services/lesson.service';
import { QuestionService } from 'src/app/services/question-service/question.service';

@Component({
  selector: 'app-btn-add-question',
  templateUrl: './btn-add-question.component.html',
  styleUrls: ['./btn-add-question.component.css']
})
export class BtnAddQuestionComponent {
  @Input() idLesson!:string;
  @Output() addEvent = new EventEmitter<void>();
  questionForms = new FormArray([
    this.fb.group({
      question: [''],
      answerA: [''],
      answerB: [''],
      answerC: [''],
      correctAnswer: ['']
    })
  ]);

  constructor(private fb: FormBuilder, private questionService: QuestionService, private lessService: LessonService) {
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

  // get questionForms() {
  //   return this.createLessonF.get('questions') as FormArray;
  // }

  addQuestion(): void {
    this.questionForms.push(this.createQuestionFormGroup());
    console.log("add success", this.questionForms);
  }

  onCreateQuestion(): void {
    const questions = this.questionForms.value;
    this.questionService.createQuestion(JSON.stringify(questions), this.idLesson);
    this.lessService.getLessonById(parseInt(this.idLesson));
    setTimeout(() =>{
      this.addEvent.emit()
    }, 2000)
    window.alert("Thêm câu hỏi thành công")
  }

  onDeleteQuestionControl(index:number){
    this.questionForms.removeAt(index);
  }
}
