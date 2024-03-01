import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultModule} from "../result/result.module";
import {QuizModule} from "../quiz/quiz.module";
import {UserModule} from "../user/user.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoomModule {
  private _id!: number;
  private _active!: boolean;
  private _quiz!: QuizModule;
  private _account!: UserModule;

  get quiz(): QuizModule {
    return this._quiz;
  }

  set quiz(value: QuizModule) {
    this._quiz = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get active(): boolean {
    return this._active;
  }

  set active(value: boolean) {
    this._active = value;
  }

  get account(): UserModule {
    return this._account;
  }
}
