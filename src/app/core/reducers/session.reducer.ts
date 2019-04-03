import { Action } from '@ngrx/store';
import { Session } from '../models/session.model';
import * as SessionActions from '../actions/session.action';

const initialSession: Session = {
    id: null,
    name: null,
    role: null
};

export function sessionreducer ( state: Session[] = [ initialSession ], action: SessionActions.Actions ) {

    // Check the action type and change state accordingly
    switch ( action.type ) {
        case SessionActions.ADD_SESSION:
            return [ ...state, action.payload ];

        // Remove Session variable
        case SessionActions.REMOVE_SESSION:
            state.splice( action.payload, 1 );
            return state;

        // Default case
        default:
            return state;
    }
}