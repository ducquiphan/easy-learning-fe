import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizModule } from 'src/app/models/quiz/quiz.module';
import { QuizService } from 'src/app/services/quizService/quiz.service';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent implements OnInit {
  quiz$!:Observable<QuizModule[]>;


  constructor(private quizService:QuizService){}

  ngOnInit(): void {
    this.quiz$ = this.quizService.quiz$;
  }

}
