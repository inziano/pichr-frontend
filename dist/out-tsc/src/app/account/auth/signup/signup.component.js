var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// Service imports
import { SignupService } from './../shared/signup.service';
var SignupComponent = /** @class */ (function () {
    // Constructor
    function SignupComponent(fb, signup, route) {
        this.fb = fb;
        this.signup = signup;
        this.route = route;
    }
    // OnInit
    SignupComponent.prototype.ngOnInit = function () {
        // Signup Form
        this.signupForm = this.fb.group({
            // name
            username: ['', Validators.required],
            // email
            email: ['', Validators.required],
            // password
            password: ['', Validators.required],
        });
    };
    // On submit
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        // Confirm validity of the form
        if (this.signupForm.valid) {
            // Build object
            var account = {
                username: this.signupForm.value.username,
                email: this.signupForm.value.email,
                password: this.signupForm.value.password
            };
            // console.log(account);
            // Submit to service for handling
            this.signup.createNewUser(account).subscribe(function (response) {
                _this.resp = response;
                console.log(response);
                // //  Set timeout then redirect to the next page
                // setTimeout(() => {
                //     // Redirect to new page
                //     this.route.navigate( ['/profile'] );
                // }, 2000);
            });
        }
        else if (this.signupForm.invalid) {
            // Throw error messages
            this.invalid = 'Form is invalid';
            console.log('invalid');
            return this.invalid;
        }
        else {
            // Throw exception
            this.exception = 'This is a major error';
            console.log('error');
            return this.exception;
        }
    };
    SignupComponent = __decorate([
        Component({
            selector: 'app-signup',
            templateUrl: '/signup.component.html'
        }),
        __metadata("design:paramtypes", [FormBuilder, SignupService, Router])
    ], SignupComponent);
    return SignupComponent;
}());
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map