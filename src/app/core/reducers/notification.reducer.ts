import { Action } from '@ngrx/store';
import { Notification } from '../models/notification.model';
import * as NotifActions from '../actions/notification.action';

const initialNotifications: Notification = {
    id: 1,
    title: 'Image Uploaded',
    message: 'Your image has been uploaded'
};

export function notificationreducer( state: Notification[] = [initialNotifications], action: NotifActions.Actions ) {

    // Check the action type and change state accordingly
    switch (action.type) {
        case NotifActions.ADD_NOTIFICATION:
            return [...state, action.payload];

        // Remove notification
        case NotifActions.REMOVE_NOTIFICATION:
            state.splice( action.payload, 1 );
            return state;

        // Default case
        default:
            return state;
    }
}
