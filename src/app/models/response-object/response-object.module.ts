import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ResponseObjectModule {
  data :  [];
  message !: string;
  status !: number;
}
