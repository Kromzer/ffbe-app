import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import { FormsModule }   from '@angular/forms';

import {AppComponent} from "./app.component";

import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AuthGuardService } from './auth-guard.service';


import {Router} from '@angular/router';

import { CharacterPipe } from './get-characters-images/character.pipe';
import { GetCharactersImagesComponent } from './get-characters-images/get-characters-images.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GetCharactersImagesComponent,
    CharacterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
        AuthGuardService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
