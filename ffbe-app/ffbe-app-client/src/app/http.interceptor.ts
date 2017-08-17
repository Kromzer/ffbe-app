import {Injectable, Injector} from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {environment} from "../environments/environment";

import { AuthService } from './auth.service';

import { AppRoutingModule } from './app-routing/app-routing.module';

import {Router} from '@angular/router';

@Injectable()
export class InterceptedHttp extends Http {
    
    authService: AuthService;
    
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private router: Router) {
        super(backend, defaultOptions);
        this.authService = new AuthService(this, router);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.request(url, options));
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.get(url,options));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {   
        return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.delete(url, options));
    }
    
    getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');
        return options;
    }

    intercept(observable: Observable<Response>): Observable<Response> {
        return observable.catch((err, source) => { 
            if (err.status == 403) {
                console.log("Not logged in.");
                this.router.navigate(['/login']);
                return Observable.empty();
            } else {
                return Observable.throw(err);
            }
        });

    }
}