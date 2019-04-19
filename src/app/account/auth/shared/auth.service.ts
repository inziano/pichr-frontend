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

        console.log( this.endpoint.fullUrl );
    }


    // Response checker
    public responseChecker ( res ) {

        /**
         *
         * Store value in storage
         */
        // Call session handler and start new session
        if ( this.session.newSession(res) ) {
            // Return login succesful notification and handle redirect
            return 'succesful';
        } else {
            // Login not succesful
            return 'unsuccesful';
        } // End if else block

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
        // Send credentials to api
        return this.http.post( this.login, credentials  ).pipe( map( response => {

            /**
             * Check the token is part of the response 
             * Fall back incase api returns with data but no token
             */
            if ( response.json().hasOwnProperty('data') ) {
                // Get the response
                const resp = response.json().data.token;
                // Get the id
                const resp_id = response.json().data.user_id;
                // Get the name
                const resp_name = response.json().data.user_name;
                // Call token maker
                const pichrtoken = this.tokenMaker(resp, resp_id, resp_name);
                // store token
                return this.responseChecker(pichrtoken);
            } else {
                // fail
                console.log('sth');
            }
        }));
    }

    public tokenMaker ( res, id, name ) {

        // add the id to the response
        res[ 'id' ] = id;
        res[ 'name' ] = name;
        // stringify the json object
        const tkn = JSON.stringify(res);
        // Return the stringified token
        return tkn;
    }
}
