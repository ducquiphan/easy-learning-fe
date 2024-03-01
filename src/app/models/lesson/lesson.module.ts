import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionModule } from '../question/question.module';
import { ImageModule } from '../image/image.module';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LessonModule {
  private _id!: number;
  private _active!: boolean;
  private _title!: string;
  private _description!: string;
  private _image!: ImageModule;
  private _questions:QuestionModule[] = [];
  private _userInfo:UserModule;

  public set id(id:number){
    this._id = id;
  }
  public set userInfo(userInfo:UserModule){
    this._userInfo = userInfo;
  }

  public set active(active:boolean){
    this._active = active;
  }

  public set title(title:string){
    this._title = title;
  }

  public set description(description:string){
    this._description = description;
  }

  public set questions(questions:[]){
    this._questions = questions;
  }

  public set image(image:ImageModule){
    this._image = image;
  }

  public get id(){
    return this._id;
  }

  public get userInfo(){
    return this._userInfo;
  }

  public get active(){
    return this._active;
  }

  public get title(){
    return this._title;
  }

  public get description(){
    return this._description;
  }

  get questions(): QuestionModule[] {
    return this._questions;
  }


  get image(): ImageModule {
    return this._image;
  }

}

