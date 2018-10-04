import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

// Rx imports
import { map, reduce } from 'rxjs/operators';

// Service imports
import { EndpointsService } from './../../../core/shared/endpoint.service';
import { SessionService } from './../../../core/shared/session.service';

// Interface imports
import { ApiResponseStructure } from './../../../core/interfaces';


@Injectable()

export class AuthService {
    // Service handles user authentication

    // Api endpoint routes
    // login route
    login: string;

    // Response
    response: any;

    // Constructor
    constructor( private http: Http, private endpoint: EndpointsService, private session: SessionService) {
        // Login endpoint path
        this.login = this.endpoint.fullUrl + 'user/login';
    }


    // Response checker
    public responseChecker ( res ) {
        // Check if response has data field and data field is not null

        if ( res.hasOwnProperty('token') ) {
            // Get the token
            const token = res.token;

            // Call session handler and start new session
            if ( this.session.newSession(token) ) {
                // Return login succesful notification and handle redirect
                return 'succesful';
            } else {
                // Login not succesful
                return 'unsuccesful';
            } // End if else block

        } else {
            // Response returned null
            console.log('no her');
            // Get the message and pass to the front
        }
    }

    // Error handler
    public errorHandler ( error: HttpErrorResponse ) {
        // Client side or network error
        if ( error.error instanceof ErrorEvent ) {
            // This is a client side/network error
        } else {
            // Backend error
        }
        // return user friendly error message

        // return new ErrorObservable('BAAAAAAAAAAAD');
    }

    // Login
    public logon( credentials ) {

        console.log('sth');
        // Send credentials to api
        return this.http.post( this.login, credentials).pipe( map( response => {
            const resp = response.json();
            return this.responseChecker(resp.data);
        }));
    }
}
