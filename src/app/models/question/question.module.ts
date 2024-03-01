import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class QuestionModule {
  private _id!:number;
  private _question!:string;
  private _answerA!:string;
  private _answerB!:string;
  private _answerC!:string;
  private _correctAnswer!:string;
  private _lesson!:number;

  public set id(id:number){
    this._id = id;
  }
  public set question(question:string){
    this._question = question;
  }
  public set answerA(answerA : string){
    this._answerA = answerA;
  }
  public set answerB(answerB : string){
    this._answerB = answerB;
  }
  public set answerC(answerC : string){
    this._answerC = answerC;
  }
  public set correctAnswer(correctAnswer : string){
    this._correctAnswer = correctAnswer;
  }
  public set lesson(lessonId : number){
    this._lesson = lessonId;
  }

  public get id(){
    return this._id;
  }
  public get question(){
    return this._question;
  }
  public get answerA(){
    return this._answerA;
  }
  public get answerB(){
    return this._answerB;
  }
  public get answerC(){
    return this._answerC;
  }
  public get correctAnswer(){
    return this._correctAnswer;
  }
  public get lesson(){
    return this._lesson;
  }
}
