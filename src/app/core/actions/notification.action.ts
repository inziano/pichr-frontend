import { Action } from '@ngrx/store';
import { Notification } from '../models/notification.model';

// Actions types
export const ADD_NOTIFICATION = '[NOTIFICATION] Add';
export const REMOVE_NOTIFICATION = '[NOTIFICATION] Remove';

// Actions
export class AddNotification implements Action {
    // Define the action
    readonly type = ADD_NOTIFICATION;

    // class constructor
    constructor ( public payload: Notification ) {}
}

// Remove notification
export class RemoveNotification implements Action {
    // Define the action type
    readonly type = REMOVE_NOTIFICATION;

    // Class constructor
    constructor ( public payload: number ) {}
}

// Export the types
export type Actions = AddNotification | RemoveNotification;
