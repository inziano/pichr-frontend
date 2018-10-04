import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';



// custom modules
import { BackendRouterModule } from '../backend/backend-routes.module';

// Declarations
import { BackendDeclarations } from '../backend';
import { MediaDeclarations } from '../media';

@NgModule({
    declarations: [
        ...BackendDeclarations,
        ...MediaDeclarations
    ],
    imports: [
        BackendRouterModule,
        BrowserModule,
        HttpClientModule,
        HttpModule,
        ReactiveFormsModule,
    ],
    exports: [
        ...MediaDeclarations
    ],
    providers: [ ]
})

export class BackendModule {}
