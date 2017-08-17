import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { Http, RequestOptions, Headers } from '@angular/http'

export class User {
  constructor(
    public username: string,
    public password: string) { }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public user = new User('','');
    
    constructor(public authService: AuthService, private http: Http) {}

    ngOnInit() {
    }

    login() {
        this.authService.login(this.user.username, this.user.password);
    }
}
