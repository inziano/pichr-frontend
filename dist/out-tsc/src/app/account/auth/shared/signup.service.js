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
import { AuthService } from './auth.service';
import { EndpointsService } from './../../../core/shared/endpoint.service';
import { SessionService } from './../../../core/shared/session.service';
var SignupService = /** @class */ (function () {
    // Constructor
    function SignupService(http, auth, endpoint, session) {
        this.http = http;
        this.auth = auth;
        this.endpoint = endpoint;
        this.session = session;
        // Signup endpoint path
        this.signup = this.endpoint.fullUrl + 'user/create';
    }
    // Create new user
    SignupService.prototype.createNewUser = function (details) {
        // User details to string
        var body = JSON.stringify(details);
        // Pass details to api
        return this.http.post(this.signup, body, this.endpoint.options).pipe(map(function (response) {
            var resp = response.json();
            // return this.auth.responseChecker(resp.data);
            return resp;
        }));
    };
    SignupService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http, AuthService, EndpointsService, SessionService])
    ], SignupService);
    return SignupService;
}());
export { SignupService };
//# sourceMappingURL=signup.service.js.map