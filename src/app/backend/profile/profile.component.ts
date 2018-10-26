import { Component, OnInit } from '@angular/core';

// Service
import { AccountsService } from '../shared/accounts.service';

// Service imports

@Component({
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {

    details: any;

    // Constructor
    constructor( private acct: AccountsService ) {}

    ngOnInit () {
        this.acct.getAccountDetails().subscribe( response => {
            this.details = response;
        });
    }
}