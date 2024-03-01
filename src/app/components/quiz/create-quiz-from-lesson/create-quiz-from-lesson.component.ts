import { Component, Input, OnInit } from '@angular/core';
import { QuestionModule } from "../../../models/question/question.module";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { QuizService } from "../../../services/quizService/quiz.service";
import { LessonModule } from "../../../models/lesson/lesson.module";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { QuizComponent } from "../quiz.component";
import { QuizModule } from "../../../models/quiz/quiz.module";
import { RoomService } from "../../../services/room.service";
import { ResultService } from "../../../services/result.service";
import { RoomModule } from 'src/app/models/room/room.module';

@Component({
    selector: 'app-create-quiz-from-lesson',
    templateUrl: './create-quiz-from-lesson.component.html',
    styleUrls: ['./create-quiz-from-lesson.component.css']
})
export class CreateQuizFromLessonComponent implements OnInit{
  @Input() questions!: QuestionModule[];
  isPremium: boolean = false;

  createQuizF: FormGroup = new FormGroup(
    {
      title: new FormControl('', [Validators.required]),

      quizSize: new FormControl('', [Validators.required, Validators.nullValidator]),
      time: new FormControl('', [Validators.required, Validators.nullValidator])
    }
  );

    constructor(
        private quizService: QuizService,
        private httpClient: HttpClient,
        private roomService: RoomService,
        private resultService: ResultService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
      var roles = localStorage.getItem('roles');
      if (roles.includes("premium")) {
        this.isPremium = true;
      }
    }
    onCheckPremium(): void {
      if (!this.isPremium) {
        alert("Bạn cần nâng cấp tài khoản để sử dụng tính năng này!");
        this.router.navigate(['upgrade']);
      }
    }

  getRandomQuestions(): number[] {
    const randomQuestionsIds: number[] = [];
    const arrayCopy: QuestionModule[] = [...this.questions]; // Create a copy of the original array
    const data = this.createQuizF.value
    for (let i = 0; i < data.quizSize; i++) {
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
      const randomElement = arrayCopy.splice(randomIndex, 1)[0];
      randomQuestionsIds.push(randomElement.id);
    }

    return randomQuestionsIds;
  }


  onCreateQuiz(): void {
    if (this.createQuizF.invalid) {
      alert("Vui lòng nhập đủ thông tin!");
      return;
    }
    const data = this.createQuizF.value;
    const time: number = (<number>data.time);
    this.quizService.create(data.title, time, this.getRandomQuestions()).subscribe(
      (res: any) => {
        let quizId: number = res.data.id;
        this.roomService.create(quizId).subscribe(
          (res: any) => {
            let roomId: number = res.data.id;
            console.log("Duc ne: " + roomId);
            this.resultService.create(roomId).subscribe(
              (res: any) => {
              },
              (error: any) => {
                alert("Create result error: " + error.message);
                return;
              });
            alert('Tạo Quiz thành công');
            this.router.navigate([`quiz/do-quiz`, roomId]);
          },
          (error: any) => {
            alert("Create room error: " + error.message);
            return;
          });
      },
      (error: any) => {
        alert("Create quiz error: " + error.message);
        return;
      });
  }
}

