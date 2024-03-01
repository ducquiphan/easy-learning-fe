import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {QuizItemModule} from "../../../../models/quiz-item/quiz-item.module";
import {ResultItemService} from "../../../../services/result-item.service";
import {ResultItemModule} from "../../../../models/result-item/result-item.module";
import {ResultModule} from "../../../../models/result/result.module";
import {ResultService} from "../../../../services/result.service";
import {ResponseObjectModule} from "../../../../models/response-object/response-object.module";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-do-quiz-item',
  templateUrl: './do-quiz-item.component.html',
  styleUrls: ['./do-quiz-item.component.css']
})
export class DoQuizItemComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() roomId!: number;
  @Input() quizItem!: QuizItemModule;
  @Input() index!: number;
  @Input() total!: number;
  @Output() itemEvent = new EventEmitter<ResultItemModule>();
  resultItem!: ResultItemModule;
  observer!: Subscription;
  result!: ResultModule;
  isDisabled: boolean = false;
  originalArray: number[] = [0, 1, 2, 3];
  originalAnswers: string[] = [];
  userAnswer!: string;

  constructor(private resultItemService: ResultItemService,
              private resultService: ResultService) {
  }

  ngAfterViewInit(): void {
    if (this.userAnswer != null) {
      this.checkAnswerAgain(parseInt(this.userAnswer));
    }
  }

  ngOnDestroy(): void {
    this.observer.unsubscribe;
    console.log('destroy')
  }

  shuffledArray: number[] = [];

  ngOnInit() {
    this.userAnswer = localStorage.getItem("ans" + this.roomId + this.index);
    //localStorage.setItem('isDisable', this.isDisabled);
    this.resultItem = new ResultItemModule();
    this.resultItem.quizItem = this.quizItem;
    this.randomizeArray();
    this.originalAnswers = [
      this.quizItem.question.answerA,
      this.quizItem.question.answerB,
      this.quizItem.question.answerC,
      this.quizItem.question.correctAnswer
    ];
    this.resultService.getResultByRoomId(this.roomId);
    this.observer = this.resultService.result$.subscribe(response => {
      this.result = response as ResultModule;
    })
    console.log(this.result);
  }

  private randomizeArray() {
    this.shuffledArray = this.shuffleArray([...this.originalArray]);
  }


  private shuffleArray(array: number[]): number[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  checkAnswer(ans: number) {
    if (ans == 3) {
      this.resultItem.userAns = "correctAnswer";
      this.setCorrectAnswer(ans.toString())
      localStorage.setItem("ans" + this.roomId + this.index, ans.toString());
    } else if (ans == 2) {
      this.resultItem.userAns = "answerC";
      this.setWrongAnswer(ans.toString());
      localStorage.setItem("ans" + this.roomId + this.index, ans.toString());
    } else if (ans == 1) {
      this.resultItem.userAns = "answerB";
      this.setWrongAnswer(ans.toString());
      localStorage.setItem("ans" + this.roomId + this.index, ans.toString());
    } else if (ans == 0) {
      this.resultItem.userAns = "answerA";
      this.setWrongAnswer(ans.toString());
      localStorage.setItem("ans" + this.roomId + this.index, ans.toString());
    }
    this.isDisabled = true;

    console.log("Detail of result item: " + this.resultItem.userAns + ", " + this.quizItem.id + ", " + this.result.id);
    this.observer = this.resultItemService.create(this.resultItem.userAns, this.quizItem.id, this.result.id).subscribe(
      (response: any) => {
        console.log(response.data);
      }
    )
  }

  private checkAnswerAgain(ans: number) {
    if (ans == 3) {
      this.resultItem.userAns = "correctAnswer";
      this.setCorrectAnswer(ans.toString())

    } else if (ans == 2) {
      this.resultItem.userAns = "answerC";
      this.setWrongAnswer(ans.toString());

    } else if (ans == 1) {
      this.resultItem.userAns = "answerB";
      this.setWrongAnswer(ans.toString());

    } else if (ans == 0) {
      this.resultItem.userAns = "answerA";
      this.setWrongAnswer(ans.toString());
    }
    this.isDisabled = true;
  }


  private setWrongAnswer(answer: string) {
    const correctElement = document.getElementsByName("3").item(this.index);
    correctElement.classList.add("correct");
    const wrongElement = document.getElementsByName(answer.toString()).item(this.index)
    wrongElement.classList.add("incorrect");
    // send resultItem to parent
    // this.itemEvent.emit(this.resultItem);
  }

  private setCorrectAnswer(answer: string) {
    const correctElement = document.getElementsByName(answer).item(this.index);
    correctElement.classList.add("correct");
    // send resultItem to parent
    // this.itemEvent.emit(this.resultItem);
  }

}
