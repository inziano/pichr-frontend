import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// Rx imports
import { map } from 'rxjs/operators';

// service imports
import { SessionService } from '../../core/shared/session.service';
import { EndpointsService } from '../../core/shared/endpoint.service';


@Injectable()

export class AccountsService {

    // accounts route
    account: string;
    // new account
    acct: string;

    // Constructor
    constructor ( private endpoint: EndpointsService, private http: Http, private session: SessionService ) {

        // Accounts endpoint
        this.account = this.endpoint.fullUrl + 'user/account/find/';
        // New account endpoint
        this.acct = this.endpoint.fullUrl + 'user/account/create';

    }

    // Get single user account details
    public getAccountDetails () {
        // get current user id from session
        const curr_id = JSON.parse( this.session.getToken() ).id;
        // Pass that id
        return this.http.get(this.account + curr_id).pipe( map( response => {
            // Console log the response 
            console.table(response);
            return response.json().data;
        }));
    }

    // Create new account
    public newAccount (accountDets) {
        // Add current id
        const curr_id = JSON.parse( this.session.getToken() ).id;

        // Append to account details object
        accountDets.user_id = curr_id;

        // Account details
        const body: string = JSON.stringify( accountDets );

        // pass the account details object
        return this.http.post(this.acct, body, this.endpoint.options).pipe( map( response => {
            console.log(response);
        }));
    }
}
