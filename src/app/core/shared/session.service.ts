import { Injectable } from '@angular/core';


@Injectable()

export class SessionService {

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
        //
        sessionStorage.setItem('pichrtoken', token);

        return true;
    }

    /**
     * verifyToken
     * Checks if the token in local storage is still valid
     */
    public verifyToken() {
        // Check if the token is still valid
        // return tokenNotExpired();
    }

    /**
     * removeToken
     */
    public removeToken() {
        // Remove token from local storage
        sessionStorage.removeItem('pichrtoken');
        // Return true
        return true;
    }
}