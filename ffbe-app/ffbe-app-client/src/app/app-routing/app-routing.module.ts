import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SayHelloComponent } from '../say-hello/say-hello.component';
import { LoginComponent } from '../login/login.component';

const appRoutes: Routes = [
  { path: 'hello', component: SayHelloComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
