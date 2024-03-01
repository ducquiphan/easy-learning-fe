import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from '../image/image.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  private _id !: number;
  private _fullname!:string;
  private _email!:string;
  private _avatar!:ImageModule;

  public set id(id:number){
    this._id =id;
  }

  public set fullName(fullname:string){
    this._fullname =fullname;
  }

  public set email(email:string){
    this._email =email;
  }

  public set avatar(avatar:ImageModule){
    this._avatar =avatar;
  }

  public get id(){
    return this._id;
  }

  public get fullName(){
    return this._fullname;
  }

  public get email(){
    return this._email;
  }

  public get avatar(){
    return this._avatar;
  }
}
