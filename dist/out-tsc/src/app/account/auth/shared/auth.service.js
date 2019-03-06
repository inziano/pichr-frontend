var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// Rx imports
import { map } from 'rxjs/operators';
// Service imports
import { EndpointsService } from './../../../core/shared/endpoint.service';
import { SessionService } from './../../../core/shared/session.service';
var AuthService = /** @class */ (function () {
    // Constructor
    function AuthService(http, endpoint, session) {
        this.http = http;
        this.endpoint = endpoint;
        this.session = session;
        // Login endpoint path
        this.login = this.endpoint.fullUrl + 'user/login';
    }
    // Response checker
    AuthService.prototype.responseChecker = function (res) {
        // Check if response has data field and data field is not null
        if (res.hasOwnProperty('token')) {
            // Get the token
            var token = res.token;
            // Call session handler and start new session
            if (this.session.newSession(token)) {
                // Return login succesful notification and handle redirect
                return 'succesful';
            }
            else {
                // Login not succesful
                return 'unsuccesful';
            } // End if else block
        }
        else {
            // Response returned null
            console.log('no her');
            // Get the message and pass to the front
        }
    };
    // Error handler
    AuthService.prototype.errorHandler = function (error) {
        // Client side or network error
        if (error.error instanceof ErrorEvent) {
            // This is a client side/network error
        }
        else {
            // Backend error
        }
        // return user friendly error message
        // return new ErrorObservable('BAAAAAAAAAAAD');
    };
    // Login
    AuthService.prototype.logon = function (credentials) {
        var _this = this;
        console.log('sth');
        // Send credentials to api
        return this.http.post(this.login, credentials).pipe(map(function (response) {
            var resp = response.json();
            return _this.responseChecker(resp.data);
        }));
    };
    AuthService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http, EndpointsService, SessionService])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map