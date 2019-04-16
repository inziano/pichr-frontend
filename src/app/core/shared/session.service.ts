import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as SessionAction from '../actions/session.action';

import { AppState } from '../../app.state';
import { Session } from '../models/session.model';


@Injectable()

export class SessionService {

    // Constructor
    constructor ( private store: Store<AppState> ) {}

    // Check if current session
    public sessionCheck () {
        // Check if local storage has session variable
        if ( sessionStorage.getItem('pichrtoken') !== null ) {
            // Item exists
            return true;

        } else {
            // Item does not exist
            return false;
        }
    }

    // Create new session
    public newSession (token) {
        // Set token in session storage
        sessionStorage.setItem('pichrtoken', token);

        // Persist item in app state
        this.store.dispatch ( new SessionAction.AddSession( {
            id: token.user_id,
            name: token.user_name
        }));

        return true;
    }

    /**
     * verifyToken
     * Checks if the token in local storage is still valid
     */
    public getToken() {
        // Check if the token is still valid
        return sessionStorage.getItem('pichrtoken');
    }

    /**
     * removeToken
     */
    public removeToken( index ) {
        // Remove token from local storage
        sessionStorage.removeItem('pichrtoken');

        // Remove from app store
        this.store.dispatch ( new SessionAction.RemoveSession( index ) );
        // Return true
        return true;
    }
}
