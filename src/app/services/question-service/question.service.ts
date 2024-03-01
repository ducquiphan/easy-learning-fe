import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionModule } from 'src/app/models/question/question.module';

const api = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  updateQuestion(question:QuestionModule){
    this.http.put(`${api}/question/update`, question).subscribe(resp => {
      console.log("Update question success ", question);
      console.log("Update question success");
    })
  }

  deleteQuestion(id:number){
    this.http.delete(`${api}/question/delete/${id}`).subscribe(resp => {
      console.log("Delete question success ", id);
      console.log("Delete question success");
    })
  }

  createQuestion(question:string, idLesson:string){
    var data= new FormData();
    data.append("questions", question);
    data.append("idLesson", idLesson);
    this.http.post(`${api}/question/create`, data).subscribe(resp => {
      console.log("Delete question success ", question);
      console.log("Delete question success", idLesson);
    })
  }
}
