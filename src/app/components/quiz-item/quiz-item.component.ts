import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {QuizModule} from 'src/app/models/quiz/quiz.module';
import {UserModule} from 'src/app/models/user/user.module';
import {QuizService} from 'src/app/services/quizService/quiz.service';
import {RoomService} from "../../services/room.service";
import {ResultService} from "../../services/result.service";

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.css']
})
export class QuizItemComponent {
  @Input() quiz!: QuizModule;
  userInfo!: UserModule;

  constructor(private quizzService: QuizService, private router: Router,
              private roomService: RoomService,
              private resultService: ResultService) {
  }

  ngOnInit(): void {
    this.quizzService.getUserInfoByIdQuizz(this.quiz.id).subscribe((resp:any) => {
      this.userInfo = resp.data as UserModule;
    })
  }

  onGoToQuizz() {
    this.quizzService.getQuizById(this.quiz.id);
    this.router.navigate([`quiz`, this.quiz.id]);
  }

  onDoQuiz() {
    const isDo = confirm("Bạn có muốn làm quiz này không?");
    if (isDo) {
      this.roomService.create(this.quiz.id).subscribe(
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
          alert('Tạo phòng thành công');
          this.router.navigate([`quiz/do-quiz`, roomId]).then();
        },
        (error: any) => {
          alert("Create room error: " + error.message);
          return;
        });
    }
  }
}
