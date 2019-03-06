var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var SessionService = /** @class */ (function () {
    function SessionService() {
    }
    // Check if current session
    SessionService.prototype.sessionCheck = function () {
        // Check if local storage has session variable
        if (sessionStorage.getItem('pichrtoken') !== null) {
            // Item exists
            return true;
        }
        else {
            // Item does not exist
            return false;
        }
    };
    // Create new session
    SessionService.prototype.newSession = function (token) {
        //
        sessionStorage.setItem('pichrtoken', token);
        return true;
    };
    /**
     * verifyToken
     * Checks if the token in local storage is still valid
     */
    SessionService.prototype.verifyToken = function () {
        // Check if the token is still valid
        // return tokenNotExpired();
    };
    /**
     * removeToken
     */
    SessionService.prototype.removeToken = function () {
        // Remove token from local storage
        sessionStorage.removeItem('pichrtoken');
        // Return true
        return true;
    };
    SessionService = __decorate([
        Injectable()
    ], SessionService);
    return SessionService;
}());
export { SessionService };
//# sourceMappingURL=session.service.js.map