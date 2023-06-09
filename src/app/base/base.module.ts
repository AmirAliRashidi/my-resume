import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';



@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionComponent
  ]
})
export class BaseModule { }
