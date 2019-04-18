import { Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { UserComponent} from './user/user.component';

export const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {path: '', redirectTo: '/index', pathMatch: 'full'}
];
