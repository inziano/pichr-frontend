var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// Custom modules
import { AppRouterModule } from './routes.modules';
import { BackendModule } from './backend/backend.module';
// Service imports
import { AuthService } from './account/auth/shared/auth.service';
import { BackendService } from './backend/shared/backend.service';
import { EndpointsService } from './core/shared/endpoint.service';
import { SessionService } from './core/shared/session.service';
import { SignupService } from './account/auth/shared/signup.service';
// Declarations
import { AcctDeclarations } from './account';
import { AppComponent } from './app.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent
            ].concat(AcctDeclarations),
            imports: [
                BackendModule,
                BrowserModule,
                HttpClientModule,
                HttpModule,
                ReactiveFormsModule,
                AppRouterModule
            ],
            providers: [
                AuthService,
                BackendService,
                EndpointsService,
                SessionService,
                SignupService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map