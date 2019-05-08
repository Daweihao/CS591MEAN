import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
