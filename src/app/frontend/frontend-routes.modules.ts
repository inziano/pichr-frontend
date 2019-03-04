import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Component imports
import { LandingComponent } from './website/landing/landing.component';
import { NavigationComponent } from './website/navigation/navigation.component';

const FrontendRoutes = [
    // Frontend routes
    {
        path: '',
        component: LandingComponent,
    },
];

// Routing module
@NgModule({
    imports: [
        RouterModule.forChild(FrontendRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class FrontendRouterModule {}
