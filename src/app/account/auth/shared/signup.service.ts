import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';

// Rx imports
import { map, reduce } from 'rxjs/operators';

// Service imports
import { AuthService } from './auth.service';
import { EndpointsService } from './../../../core/shared/endpoint.service';
import { SessionService } from './../../../core/shared/session.service';

// Interface imports
import { ApiResponseStructure } from './../../../core/interfaces';


@Injectable()

export class SignupService {
    // Service handles user signup

    // Api endpoints
    // Signup route
    signup: string;

    // Response
    response: any;

    // Constructor
    constructor( private http: Http, private auth: AuthService, private endpoint: EndpointsService, private session: SessionService ) {
        // Signup endpoint path
        this.signup = this.endpoint.fullUrl + 'user/create';
    }

    // Create new user
    public createNewUser(details) {
        // User details to string
        const body: string = JSON.stringify( details );
        // Pass details to api
        return this.http.post(this.signup, body, this.endpoint.options).pipe(map(response => {
            const resp = response.json();
            // return this.auth.responseChecker(resp.data);
            return resp;
        }));

    }
}
