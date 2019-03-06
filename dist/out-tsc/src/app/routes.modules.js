var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
import { LoginComponent } from './account/auth/login/login.component';
import { SignupComponent } from './account/auth/signup/signup.component';
// Constant that holds the routes
var Routes = [
    // Website routes
    { path: 'login', component: LoginComponent },
    { path: 'register', component: SignupComponent }
];
// Routing module
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(Routes)
            ],
            exports: [
                RouterModule
            ]
        })
    ], AppRouterModule);
    return AppRouterModule;
}());
export { AppRouterModule };
//# sourceMappingURL=routes.modules.js.map