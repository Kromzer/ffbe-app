import { Component, OnInit } from '@angular/core';

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
    
    constructor(private http: Http) {}

    ngOnInit() {
    }

    login() {
        let body = {"username":this.user.username,"password":this.user.password};
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'text/html; charset=utf-8' });
        let options = new RequestOptions({ headers: headers }); // Create a request option

        this.http.post('http://localhost:8080/api/login', body, options).map(res =>  {
            localStorage.setItem('token', res.headers.get("Authorization"));
            }).subscribe();
    }
}
