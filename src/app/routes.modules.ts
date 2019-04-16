import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LoginComponent } from './account/auth/login/login.component';
import { SignupComponent } from './account/auth/signup/signup.component';
import { UploadComponent } from './media/upload/upload.component';

// Constant that holds the routes
const PichrRoutes = [
    // Website routes
    { path: 'login', component: LoginComponent },
    { path: 'register', component: SignupComponent },
    { path: 'upload', component: UploadComponent }
];

// Routing module
@NgModule({
    imports: [
        RouterModule.forRoot(PichrRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouterModule {}
