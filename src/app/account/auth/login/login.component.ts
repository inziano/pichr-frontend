import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

// Service imports
import { AuthService } from './../shared/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: '/login.component.html'
})

export class LoginComponent implements OnInit {

    // Login form model
    loginForm: FormGroup;

    // Var
    resp: string;

    // Constructor
    constructor( private fb: FormBuilder, private route: Router, private auth: AuthService ) {}

    // OnInit
    ngOnInit() {

        // Login form
        this.loginForm = this.fb.group({
            // Username or email
            logon: ['', Validators.required],
            // Password
            password: ['', Validators.required]
        });
    }

    // On submitting the form
    onSubmit() {

        // Confirm validity of the form
        if ( this.loginForm.valid ) {
            // Build object
            const credentials = {
                email: this.loginForm.value.logon,
                password: this.loginForm.value.password
            };

            // Submit to the service for handling
           this.auth.logon(credentials).subscribe( response => {
            // Response
            this.resp = response;
            // Set timeout
            setTimeout(() => {
                // Navigate to the new route
                this.route.navigate( ['/dashboard'] );
            }, 2000);
            });

        } else if ( this.loginForm.invalid ) {
            // Throw error
        } else {
            // Throw exception
        }
    }
}
