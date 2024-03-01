import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { timeout } from 'rxjs';
import { QuestionModule } from 'src/app/models/question/question.module';
import { QuestionService } from 'src/app/services/question-service/question.service';

@Component({
  selector: 'app-btn-edit-my-questions',
  templateUrl: './btn-edit-questions.component.html',
  styleUrls: ['./btn-edit-questions.component.css']
})
export class BtnEditMyQuestionsComponent implements DoCheck {
  @Input() questions !: QuestionModule[];
  @Output() deleteEvent = new EventEmitter<void>();
  questionSelected !: QuestionModule;
  keyword = "";

  questionForm = new FormGroup({
    title: new FormControl(""),
    answerA: new FormControl(""),
    answerB: new FormControl(""),
    answerC: new FormControl(""),
    correctAnswer: new FormControl("")
  }
  );

  constructor(private questionService: QuestionService) { }
  ngDoCheck(): void {
  }

  onSelect(question: QuestionModule) {
    this.questionSelected = question;
    this.questionForm.setValue({
      title: this.questionSelected.question,
      answerA: this.questionSelected.answerA,
      answerB: this.questionSelected.answerB,
      answerC: this.questionSelected.answerC,
      correctAnswer: this.questionSelected.correctAnswer
    })
  }

  onSearch() {
    this.deleteEvent.emit();
    setTimeout(() =>  this.searchFuncCallback(), 500)


  }
  searchFuncCallback() {
    if (this.keyword !== "") {
      this.questions = [...this.questions.filter(item => (item.id === parseInt(this.keyword)) || (item.question.includes(this.keyword)))];
      console.log("question ", this.questions);
    } else {
      console.log("question ++ ", this.questions);
    }
  }



  onUpdate() {
    var formData = this.questionForm.value;
    this.questionSelected.question = formData.title || this.questionSelected.question;
    this.questionSelected.answerA = formData.answerA || this.questionSelected.answerA;
    this.questionSelected.answerB = formData.answerB || this.questionSelected.answerB;
    this.questionSelected.answerC = formData.answerC || this.questionSelected.answerC;
    this.questionSelected.correctAnswer = formData.correctAnswer || this.questionSelected.correctAnswer;
    this.questionService.updateQuestion(this.questionSelected as QuestionModule);
    window.alert("Cập nhật câu hỏi thành công");
  }

  onDeleteQuestion(id: number) {
    this.questionService.deleteQuestion(id);
    // this.questions.splice(this.questions.findIndex(item => item.id === id), 1);
    // this.questions = [...this.questions];
    setTimeout(() => {
      this.deleteEvent.emit()
    }, 500)

    window.alert("Xóa câu hỏi thành công");
  }
}
