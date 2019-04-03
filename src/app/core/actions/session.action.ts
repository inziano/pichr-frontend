import { Action } from '@ngrx/store';
import { Session } from '../models/session.model';
import { RemoveNotification } from './notification.action';

// Action types
export const ADD_SESSION = '[SESSION] Add';
export const REMOVE_SESSION = '[SESSION] Remove';

// Actions
export class AddSession implements Action {
    // Define the action
    readonly type = ADD_SESSION;

    // Class constructor
    constructor ( public payload: Session ) {}
}

// Remove session data
export class RemoveSession implements Action {
    // Define the action
    readonly type = REMOVE_SESSION;

    // Class constructor
    constructor ( public payload: number ) {}
}

// Export the types
export type Actions = AddSession | RemoveSession;
