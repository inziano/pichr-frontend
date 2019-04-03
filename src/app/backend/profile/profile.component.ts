import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Service imports
import { AccountsService } from '../shared/accounts.service';


@Component({
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

    details: any;

    // Account form
    accountForm: FormGroup;

    // Constructor
    constructor( private acct: AccountsService, private fb: FormBuilder ) {
    }

    ngOnInit () {
        this.acct.getAccountDetails().subscribe( response => {
            this.details = response;
        });

        // Account form
        this.accountForm = this.fb.group({
            // Names
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            // Date of birth
            dob: ['', Validators.required],
            // Gender
            gender: ['male'],
            // City
            city: [''],
            // Country
            country: [''],
            // Social media
            twitter: [''],
            facebook: [''],
            instagram: [''],
            website: [''],
            // Owner id
            user_id: ['', Validators.required],
        });
    }

    // Add account
    addAccount() {
        // // form validity
        // if ( !this.accountForm.valid ) {
        //     // throw error
        //     return 'error message';
        // } else {
            // Build object
            const accountDets = {
                first_name: this.accountForm.value.firstName,
                last_name: this.accountForm.value.lastName,
                dob: this.accountForm.value.dob,
                gender: this.accountForm.value.gender,
                city: this.accountForm.value.city,
                country: this.accountForm.value.country,
                twitter: this.accountForm.value.twitter,
                facebook: this.accountForm.value.facebook,
                instagram: this.accountForm.value.instagram,
                website: this.accountForm.value.website
            };

            // Submit to service
            this.acct.newAccount( accountDets ).subscribe();
        // }
    }
}
