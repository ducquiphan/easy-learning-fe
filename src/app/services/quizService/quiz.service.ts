import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { QuizModule } from "../../models/quiz/quiz.module";
import { ResponseObjectModule } from 'src/app/models/response-object/response-object.module';
import { UserModule } from 'src/app/models/user/user.module';

const api = "http://localhost:8080/api/v1";

@Injectable({
    providedIn: 'root'
})
export class QuizService {
    private _quizSubject = new BehaviorSubject<QuizModule[]>([]);
    private _doQuiz = new BehaviorSubject<Object>(new QuizModule());
    private _userSubject = new BehaviorSubject<Object>(new UserModule());
    doQuiz$ = this._doQuiz.asObservable();
    quiz$ = this._quizSubject.asObservable();
    userCreator$ = this._userSubject.asObservable();

    constructor(private http: HttpClient) {
    }

    getQuizByKey(keyword: string) {
        this.http.get(`${api}/quiz/search?keyword=${keyword}`).subscribe(resp => {
            this._quizSubject.next((resp as ResponseObjectModule).data);
        })
    }

    getQuizById(id: number) {
        this.http.get(`${api}/quiz/get/${id}`).subscribe(resp => {
            this._doQuiz.next((resp as ResponseObjectModule).data);
        })
    }

    create(title: any, time: number, questionIdList: any[]) {
        // Gửi mảng các id câu hỏi tới endpoint backend
        return this.http.post(`${api}/quiz/create`, { title, time, questionIdList });
    }


    getUserInfoByIdQuizz(id: number) {
        return this.http.get(`${api}/quiz/creator/${id}`);
    }



    // getQuizOfLesson(idLesson:number){
    //   this.http.get(`${api}/do-quiz-item/ofLesson?id=${idLesson}`).subscribe(resp => {
    //     this.quizSubject.next((resp as ResponseObjectModule).data);
    //   })
    // }
}
