import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ResultItemModule} from "../models/result-item/result-item.module";
import {HttpClient} from "@angular/common/http";
const api = "http://localhost:8080/api/v1";
@Injectable({
  providedIn: 'root'
})
export class ResultItemService {

  private _resultItem = new BehaviorSubject<Object>(new ResultItemModule());
  resultItem$ = this._resultItem.asObservable();
  constructor(private http:HttpClient) { }

  create(userAns: string, quizItemId: number, resultId: number){
    return this.http.post(`${api}/result-item/create`, {userAns, quizItemId, resultId});
  }
}
