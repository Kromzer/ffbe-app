import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http'

import {Router} from '@angular/router';

@Injectable()
export class AuthService {
    
    token: string;
    
    constructor(private http: Http, private router: Router) { }

    login(username: string, password: string) {
        let body = {"username":username,"password":password};
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'text/html; charset=utf-8' });
        let options = new RequestOptions({ headers: headers }); // Create a request option

        this.http.post('http://localhost:8080/api/login', body, options).map(res =>  {
            this.token = res.headers.get("Authorization");
            localStorage.setItem('token', this.token);
            this.router.navigate(['/hello']);
            }).subscribe();
    }
    
    getToken() : string {
        return this.token;
    }
}
