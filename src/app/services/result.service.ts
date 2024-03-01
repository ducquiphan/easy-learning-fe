import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ResultModule} from "../models/result/result.module";
import {BehaviorSubject} from "rxjs";
import {RoomModule} from "../models/room/room.module";
import {ResponseObjectModule} from "../models/response-object/response-object.module";

const api = "http://localhost:8080/api/v1";
@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private _result = new BehaviorSubject<Object>(new ResultModule());
  result$ = this._result.asObservable();

  constructor(private http:HttpClient) {}

  getResultById(id: number){
    this.http.get(`${api}/result/get/${id}`).subscribe(resp => {
      this._result.next((resp as ResponseObjectModule).data);
    })
  }

  getResultByRoomId(roomId: number){
    this.http.get(`${api}/result/get?roomId=${roomId}`).subscribe(resp => {
      this._result.next((resp as ResponseObjectModule).data);
    })
  }

  create(roomId: number){
    // Gửi room id tới endpoint backend
    return this.http.post(`${api}/result/create`, {roomId});
  }

}
