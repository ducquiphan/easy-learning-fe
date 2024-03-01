import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {RoomModule} from "../models/room/room.module";
import {ResponseObjectModule} from "../models/response-object/response-object.module";
import {LessonModule} from "../models/lesson/lesson.module";

const api = "http://localhost:8080/api/v1";
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient, private router: Router) { }

  private _room = new BehaviorSubject<Object>(new RoomModule());
  room$ = this._room.asObservable();

  getRoomById(id: number) {
    this.http.get(`${api}/room/get/${id}`).subscribe(resp => {
      return this._room.next((resp as ResponseObjectModule).data);
    })
  }

  create(quizId : number) {
    // Gửi quiz id tới endpoint backend
    return this.http.post(`${api}/room/create`, {quizId});
  }

  update(room: RoomModule) {
    console.log("display: ", room)
    this.http.post(`${api}/room/update`, room).subscribe(resp => {
      this._room.next((resp as ResponseObjectModule).data);
      console.log("update success");
    })
  }

}
