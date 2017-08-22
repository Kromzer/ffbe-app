import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService }     from '../auth-guard.service';

import { LoginComponent } from '../login/login.component';
import { GetCharactersImagesComponent } from '../get-characters-images/get-characters-images.component';

const appRoutes: Routes = [
  { path: 'getCharactersImages', canActivate: [AuthGuardService], component: GetCharactersImagesComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
