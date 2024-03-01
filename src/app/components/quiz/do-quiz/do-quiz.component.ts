import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {QuestionModule} from "../../../models/question/question.module";
import {RoomService} from "../../../services/room.service";
import {ResultService} from "../../../services/result.service";
import {ResultItemService} from "../../../services/result-item.service";
import {QuizService} from "../../../services/quizService/quiz.service";
import {RoomModule} from "../../../models/room/room.module";
import {LessonModule} from "../../../models/lesson/lesson.module";
import {QuizItemModule} from "../../../models/quiz-item/quiz-item.module";
import {ResultItemModule} from "../../../models/result-item/result-item.module";
import {Router} from "@angular/router";
import {ResultModule} from "../../../models/result/result.module";
import {Subscription} from "rxjs";
import {waitForAsync} from "@angular/core/testing";

@Component({
  selector: 'app-do-quiz',
  templateUrl: './do-quiz.component.html',
  styleUrls: ['./do-quiz.component.css']
})
export class DoQuizComponent implements OnInit, OnDestroy {
  @Input() id: string = "";
  quizItems!: QuizItemModule[];
  room!: RoomModule;
  observer!: Subscription;
  resultItems!: ResultItemModule[];
  resultId!: number;

  constructor(
    private roomService: RoomService,
    private resultItemService: ResultItemService,
    private resultService: ResultService,
    private quizService: QuizService,
    private router: Router
  ) {
  }

  addAnswer(newAnswer: ResultItemModule) {
    this.resultItems.push(newAnswer);
    console.log(this.resultItems);
  }

  ngOnInit(): void {
    this.resultItems = [];
    this.roomService.getRoomById(parseInt(this.id));
    this.observer = this.roomService.room$.subscribe(resp => {
      this.room = resp as RoomModule;
      if (this.room.active == false) {
        this.router.navigate(['home']);
      } else {
        this.quizItems = this.room.quiz.quizItems;
      }
    });
  }

  ngOnDestroy() {
    this.observer.unsubscribe;
    console.log('destroy')
  }

  endQuiz() {
    this.changeRoomStatus()
    this.router.navigate([`result`, this.resultId]);
  }

  changeRoomStatus() {
    console.log(this.quizItems);
    this.resultService.getResultByRoomId(parseInt(this.id));
    for (let i = 0; i < this.quizItems.length; i++){
      localStorage.removeItem("ans"+this.id+i)
    }
    this.observer = this.resultService.result$.subscribe(response => {
        this.resultId = (response as ResultModule).id;
        // this.room.active = false;
        // this.roomService.update(this.room);
      }
    )
  }

  protected readonly parseInt = parseInt;
}
