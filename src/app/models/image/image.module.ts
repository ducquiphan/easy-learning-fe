import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ImageModule {
  private _publicId!:string;
  private _url!:string;

  public set publicId(publicId:string){
    this._publicId = publicId;
  }

  public set url(url:string){
    this._url = url;
  }

  public get publicId(){
    return this._publicId;
  }

  public get url(){
    return this._url;
  }
}
