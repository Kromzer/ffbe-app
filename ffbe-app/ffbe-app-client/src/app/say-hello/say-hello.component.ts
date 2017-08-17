import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-say-hello',
  templateUrl: './say-hello.component.html',
  styleUrls: ['./say-hello.component.css']
})
export class SayHelloComponent implements OnInit {

    message: string;
  
    constructor(private authService: AuthService, private http: Http) { }

    ngOnInit() {
        let headers = new Headers({ 'Content-Type': 'text/html; charset=utf-8' });
        
        if(localStorage.getItem('token')) {
            headers.append('Authorization', localStorage.getItem('token'));    
        }
        let options = new RequestOptions({ headers: headers }); // Create a request option
        
        this.http.get('http://localhost:4200/api/hello', options).subscribe(result => this.message = result.text())
    }

}
