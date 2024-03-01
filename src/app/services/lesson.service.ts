import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LessonModule } from '../models/lesson/lesson.module';
import { ResponseObjectModule } from '../models/response-object/response-object.module';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModule } from '../models/user/user.module';


const api = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  constructor(private http: HttpClient, private router: Router) { }

  // getLessons(): Observable<LessonModule[]> {
  //   return this.http.get<LessonModule[]>(`${api}/admin/m-lessons`);
  // }

  private _lessonSubject = new BehaviorSubject<LessonModule[]>([]);
  private _lessonDetailSubject = new BehaviorSubject<Object>(new LessonModule());
  private _userSubject = new BehaviorSubject<Object>(new UserModule());
  lessons$ = this._lessonSubject.asObservable();
  lessonDetail$ = this._lessonDetailSubject.asObservable();
  userCreator$ = this._userSubject.asObservable();

  getLessonByKeyword(keyword: string) {
    this.http.get(`${api}/lesson/search?keyword=${keyword}`).subscribe((resp:any) => {
      this._lessonSubject.next(resp.data);
    })
  }

  getLessonById(id: number) {
    this.http.get(`${api}/lesson/${id}`).subscribe(resp => {
      this._lessonDetailSubject.next((resp as ResponseObjectModule).data);
      console.log((resp as ResponseObjectModule).data);
    })
  }

  getMyLessonById(id: number) {
    this.http.get(`${api}/my-lesson/${id}`).subscribe(resp => {
      this._lessonDetailSubject.next((resp as ResponseObjectModule).data);
      console.log((resp as ResponseObjectModule).data);
    })
  }

  create(body: any, questions: any[]) {
    // Gửi mảng các câu hỏi tới endpoint backend
    console.log("Data lesson create :: " + { ...body, questions });
    return this.http.post(`${api}/lesson/create`, { ...body, questions });
  }

  update(formData: LessonModule) {
    console.log("display: ", formData)
    this.http.patch(`${api}/lesson/update`, formData).subscribe(resp => {
      this._lessonDetailSubject.next((resp as ResponseObjectModule).data);
      console.log("update success");
    })
  }

  delete(id: string) {
    this.http.delete(`${api}/lesson/delete/${id}`).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['/home']);
    })
  }

  getUserInfoByIdLesson(id: number): Observable<Object> {
    return this.http.get(`${api}/lesson/creator/${id}`);
  }

  createMyLesson(body: any, questions: any[]) {
    // Gửi mảng các câu hỏi tới endpoint backend
    console.log({ ...body, questions });
    return this.http.post(`${api}/my-lesson/create`, { ...body, questions });
  }

  updateMyLesson(formData: LessonModule) {
    console.log("display: ", formData)
    this.http.patch(`${api}/my-lesson/update`, formData).subscribe(resp => {
      this._lessonDetailSubject.next((resp as ResponseObjectModule).data);
      console.log("update success");
    })
  }

  deleteMyLesson(id: string) {
    this.http.delete(`${api}/my-lesson/delete/${id}`).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['/home']);
    })
  }

}
