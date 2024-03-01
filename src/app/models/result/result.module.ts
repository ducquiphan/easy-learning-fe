import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultItemModule} from "../result-item/result-item.module";
import {RoomModule} from "../room/room.module";
import {UserModule} from "../user/user.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ResultModule {
  private _id!: number;
  private _date!: Date;
  private _active!: boolean;
  private _resultItems!: ResultItemModule[];
  private _room!: RoomModule;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get active(): boolean {
    return this._active;
  }

  set active(value: boolean) {
    this._active = value;
  }

  get resultItems(): ResultItemModule[] {
    return this._resultItems;
  }

  set resultItems(value: ResultItemModule[]) {
    this._resultItems = value;
  }
  get room(): RoomModule {
    return this._room;
  }

  set room(value: RoomModule) {
    this._room = value;
  }

}
