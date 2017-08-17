import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import { FormsModule }   from '@angular/forms';

import {AppComponent} from "./app.component";
import {httpFactory} from "./http.factory";

import { LoginComponent } from './login/login.component';
import { SayHelloComponent } from './say-hello/say-hello.component';

import { AuthService } from './auth.service';

import { AppRoutingModule } from './app-routing/app-routing.module';

import {Router} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SayHelloComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
        {
            provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions, Router]
        },
        AuthService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
