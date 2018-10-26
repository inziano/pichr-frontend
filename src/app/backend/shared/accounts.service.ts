import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// Rx imports
import { map } from 'rxjs/operators';

// service imports
import { SessionService } from 'src/app/core/shared/session.service';
import { EndpointsService } from 'src/app/core/shared/endpoint.service';


@Injectable()

export class AccountsService {

    // accounts route
    account: string;

    // Constructor
    constructor ( private endpoint: EndpointsService, private http: Http, private session: SessionService ) {

        // Accounts endpoint
        this.account = this.endpoint.fullUrl + 'user/account/find/';
    }

    // Get single user account details
    public getAccountDetails () {
        // get current user id from session
        const curr_id = JSON.parse( this.session.getToken() ).id;
        // Pass that id
        return this.http.get(this.account + curr_id ).pipe( map( response =>{
            return response.json().data;
        }));
    }
}
