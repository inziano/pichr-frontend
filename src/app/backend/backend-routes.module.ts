import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';

// Component imports
import { ActivityComponent } from './activity/activity.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from '../media/list/list.component';

const BackendRoutes = [
    // Backend routes
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: '', component: ActivityComponent },
            { path: 'account', component: ProfileComponent },
            { path: 'list', component: ListComponent },
        ]
    }
];

// Routing module
@NgModule({
    imports: [
        RouterModule.forChild(BackendRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class BackendRouterModule {}
