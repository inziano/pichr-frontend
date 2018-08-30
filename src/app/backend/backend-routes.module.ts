import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const BackendRoutes = [
    // Backend routes
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
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
