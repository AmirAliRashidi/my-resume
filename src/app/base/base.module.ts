import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';



@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RatingComponent,
  ]
})
export class BaseModule { }
