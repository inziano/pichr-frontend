import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as NotifAction from '../../core/actions/notification.action';
import * as SessionAction from '../../core/actions/session.action';

// Rxjs
import { Observable } from 'rxjs';

// Service imports
import { PusherService } from '../../core/shared/pusher.service';
import { DynamicService } from '../../core/shared/dynamic.service';
import { SessionService } from '../../core/shared/session.service';

// Other imports
import { AppState } from '../../../app/app.state';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Notification } from '../../core/models/notification.model';
import { Session } from '../../core/models/session.model';

// Component
import { UploadComponent } from '../../media/upload/upload.component';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {

    // Notifications
    notifications: Observable<Notification[]>;

    // User
    User: Observable<Session[]>;

    // Search form model
    search = new FormControl();

    // ViewChild
    @ViewChild('content', {
        read: ViewContainerRef
    })

    ViewContainerRef: ViewContainerRef;

    // Constructor
    constructor (

        private dynamic: DynamicService,
        private modal: NgbModal,
        private pusher: PusherService,
        private route: Router,
        private store: Store<AppState>,
        private session: SessionService

        ) {

        // Get the notifications
        this.notifications = this.store.select('notification');
        // Get the logged in user
        this.User = this.store.select('current_login');
    }

    ngOnInit() {

        // Get push notifications
        this.pusher.getPushNotifications( 'my-event', 'my-channel');

    }

    // View notification and delelte it
    delNotification ( index ) {
        // Delete from the store
        this.store.dispatch ( new NotifAction.RemoveNotification( index) );
    }

    // Logout
    logout ( index ) {
        // Delete from the store
        this.session.removeToken( index );
        // redirect
        setTimeout ( () => {
            // Navigate to the home
            this.route.navigate( ['/'] );
        }, 2000 );
    }

    // Show dropdown
    elClicked( event: any) {

        // Id of the clicked element
        const elem = event.target.id;

        // Toggle show on specific item
        if ( elem === 'notificationDropdown' ) {
            // Toggle notification
            document.getElementById('notifications').classList.toggle('show');
        }

        if ( elem === 'messageDropdown' ) {
            // Toggle messages
            document.getElementById('messages').classList.toggle('show');
        }

        if ( elem === 'profileDropdown' ) {
            // Toggle profile
            document.getElementById('profile').classList.toggle('show');
        }
    }

    // Open
    open(content) {
        // Open modal with backdrop
        const modalRef = this.modal.open(UploadComponent, { centered: true });
    }
}
