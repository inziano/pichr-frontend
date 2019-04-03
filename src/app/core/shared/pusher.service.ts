import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import * as NotifAction from '../../core/actions/notification.action';

import { AppState } from '../../../app/app.state';

// import pusher
import * as Pusher from 'pusher-js';

@Injectable()

export class PusherService {
    // Pusher
    private pusher: any;

    constructor ( private store: Store<AppState> ) {
        // Pusher
        this.pusher = new Pusher('9def35dad8f3ba37c128', {
            cluster: 'ap2',
            forceTLS: true
        });

        // Bind method to this
        this.addNotification = this.addNotification.bind( this );
    }

    // Channels
    channelSubscription ( channel_name: string ) {
        // return subscription to channel
        const subscription = this.pusher.subscribe( channel_name );

        return subscription;
    }

    // Push notifications
    getPushNotifications ( event_name: string, channel_name: string ) {

        // initiate connection
        this.channelSubscription( channel_name ).bind( event_name, ( data ) => {

            // add notification to the store
            this.addNotification( data );
        } );

    }

    // Add notifications to store
    addNotification ( data ) {
        // Push each notification into the store
        this.store.dispatch( new NotifAction.AddNotification( {
            id: data.id,
            title: data.title,
            message: data.message,
        }));

    }
}
