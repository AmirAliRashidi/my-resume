import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideListComponent } from './side-list/side-list.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalComponent,
  },
];

@NgModule({
  declarations: [
    SideListComponent,
    PersonalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class PersonalModule { }
