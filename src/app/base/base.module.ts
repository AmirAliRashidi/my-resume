import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { RatingComponent } from './rating/rating.component';



@NgModule({
  declarations: [
    AccordionComponent,
    RatingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionComponent,
    RatingComponent,
  ]
})
export class BaseModule { }
