import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Component imports
import { ListComponent } from './list/list.component';


const MediaRoutes = [
    // Frontend routes
    {
        path: 'list',
        component: ListComponent,
    },
];

// Routing module
@NgModule({
    imports: [
        RouterModule.forChild(MediaRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class MediaRouterModule {}
