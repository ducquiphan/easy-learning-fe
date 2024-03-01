import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizItemModule} from "../quiz-item/quiz-item.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class QuizModule {

  private _id!: number;
  private _active!: boolean;
  private _title!: string;
  private _time!: number;
  private _quizItems!: QuizItemModule[];

  public set id(id: number) {
    this._id = id;
  }

  public set active(active: boolean) {
    this._active = active;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get id() {
    return this.id;
  }

  public get active() {
    return this._active;
  }

  public get title() {
    return this._title;
  }

  get quizItems(): QuizItemModule[] {
    return this._quizItems;
  }

  set quizItems(value: QuizItemModule[]) {
    this._quizItems = value;


  }

  get time(): number {
    return this._time;
  }

  set time(value: number) {
    this._time = value;
  }
}
