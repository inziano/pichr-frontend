import { Notification } from '../app/core/models/notification.model';
import { Session } from '../app/core/models/session.model';

export interface AppState {
    // Our notifications
    readonly notification: Notification[];
    // session data
    readonly current_login: Session[];
}
