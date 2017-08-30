import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import { FormsModule }   from '@angular/forms';

import {AppComponent} from "./app.component";

import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AuthGuardService } from './auth-guard.service';

import { CharacterService } from './characters/character.service';


import {Router} from '@angular/router';

import { CharacterPipe } from './characters/character.pipe';
import { CharactersListComponent } from './characters/characters-list.component';
import { CharacterComponent } from './characters/character.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CharactersListComponent,
    CharacterComponent,
    CharacterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
        AuthGuardService,
        CharacterService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
