import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService }     from '../auth-guard.service';

import { LoginComponent } from '../login/login.component';
import { CharactersListComponent } from '../characters/characters-list.component';
import { CharacterComponent } from '../characters/character.component';


const appRoutes: Routes = [
    { path: 'charactersList', canActivate: [AuthGuardService], component: CharactersListComponent },
    { path: 'getCharacter', component: CharacterComponent },
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
