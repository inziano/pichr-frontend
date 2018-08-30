import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Constant that holds the routes
const Routes = [
    // Website routes
];

// Routing module
@NgModule({
    imports: [
        RouterModule.forRoot(Routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouterModule {}