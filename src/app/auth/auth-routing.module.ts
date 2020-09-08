import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthComponent} from './auth.component';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
      path: '',
      component: AuthComponent,
      children: [
          {
              path: '',
              component: LoginComponent
          },
          {
              path: 'home',
              component: HomeComponent
          }
      ]
  },
  {
      // Redirect to 404 page.
      path: '**',
      redirectTo: '/404'
  }
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
