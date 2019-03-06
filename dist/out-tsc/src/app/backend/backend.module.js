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
// custom modules
import { BackendRouterModule } from '../backend/backend-routes.module';
// Declarations
import { BackendDeclarations } from '../backend';
var BackendModule = /** @class */ (function () {
    function BackendModule() {
    }
    BackendModule = __decorate([
        NgModule({
            declarations: BackendDeclarations.slice(),
            imports: [
                BackendRouterModule,
                BrowserModule,
                HttpClientModule,
                HttpModule,
                ReactiveFormsModule
            ],
            providers: []
        })
    ], BackendModule);
    return BackendModule;
}());
export { BackendModule };
//# sourceMappingURL=backend.module.js.map