import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalComponent,
  },
];

@NgModule({
  declarations: [
    PersonalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})

export class PersonalModule { }
