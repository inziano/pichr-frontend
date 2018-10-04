import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

// Service imports
import { EndpointsService } from '../../core/shared/endpoint.service';

@Injectable()

export class BackendService {
    // Service handles basic backend calls to api

    // Users route
    users: string;

    // Response
    response: any;

    // Constructor
    constructor ( private http: Http, private endpoint: EndpointsService ) {

        // Users endpoint
        this.users = this.endpoint.fullUrl + 'user/all';
    }

    // Get all users
    public getAllUsers () {
        // Hit api and get all users
        return this.http.get( this.users, this.endpoint.options ).pipe( map(response => {

            return response.json();
        }));
    }
}
