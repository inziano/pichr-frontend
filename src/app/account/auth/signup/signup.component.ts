import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Service imports
import { SignupService } from './../shared/signup.service';

@Component({
    selector: 'app-signup',
    templateUrl: '/signup.component.html'
})

export class SignupComponent implements OnInit {

    // Signup form model
    signupForm: FormGroup;

    // Var
    resp: string;
    invalid: string;
    exception: string;

    // Constructor
    constructor( private fb: FormBuilder, private signup: SignupService, private route: Router ) {}

    // OnInit
    ngOnInit () {

        // Signup Form
        this.signupForm = this.fb.group({
            // name
            username: ['', Validators.required],
            // email
            email: ['', Validators.required],
            // password
            password: ['', Validators.required],

        });
    }

    // On submit
    onSubmit() {

        // Confirm validity of the form
        if ( this.signupForm.valid ) {
            // Build object
            const account = {
                username: this.signupForm.value.username,
                email: this.signupForm.value.email,
                password: this.signupForm.value.password
            };

            // console.log(account);
            // Submit to service for handling
            this.signup.createNewUser(account).subscribe( response => {
                 this.resp = response;
                 console.log(response);
                // //  Set timeout then redirect to the next page
                // setTimeout(() => {
                //     // Redirect to new page
                //     this.route.navigate( ['/profile'] );
                // }, 2000);
                });

        } else if ( this.signupForm.invalid ) {
            // Throw error messages
            this.invalid = 'Form is invalid';
            console.log('invalid');

            return this.invalid;
        } else {
            // Throw exception
            this.exception = 'This is a major error';
            console.log('error');

            return this.exception;
        }
    }
}
