import {AfterContentInit, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {QuizModule} from "../../models/quiz/quiz.module";
import {QuizService} from "../../services/quizService/quiz.service";
import {LessonModule} from "../../models/lesson/lesson.module";
import {ResultService} from "../../services/result.service";
import {ResultModule} from "../../models/result/result.module";
import {UserModule} from "../../models/user/user.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input() id: string = "";
  result!: ResultModule;
  quizSize!: number;
  user !: UserModule;
  correctAnsSize: number = 0;

  constructor(private resultService: ResultService, private router: Router) {
  }

  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {

  }

  ngOnInit() {
    this.getResult();
  }


  getResult(): void {
    this.user = JSON.parse(localStorage.getItem("userInfo")).userInfo as UserModule;
    this.resultService.getResultById(parseInt(this.id));
    this.resultService.result$.subscribe(resp => {
      this.result = (resp as ResultModule);
      console.log(this.result);
      
      this.quizSize = this.result.room.quiz.quizItems.length;
      this.getCorrectAnswerSize();
      //check 

      // if (this.result.room.account.id == this.user.id) {
      //   this.quizSize = this.result.room.quiz.quizItems.length;
      //   this.getCorrectAnswerSize();
      // } else {
      //   this.router.navigate(['home']);
      // }
    })
  }

  getCorrectAnswerSize(): void {
    this.correctAnsSize = 0;
    this.result.resultItems.forEach(resultItem => {
      if (resultItem.userAns.includes("correct")) {
        this.correctAnsSize++;
      }
    })

  }
}
