import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';



// custom modules
import { BackendRouterModule } from '../backend/backend-routes.module';
import { MediaModule } from '../media/media.module';

// Declarations
import { BackendDeclarations } from '../backend';

@NgModule({
    declarations: [
        ...BackendDeclarations,
    ],
    imports: [
        BackendRouterModule,
        BrowserModule,
        HttpClientModule,
        HttpModule,
        MediaModule,
        ReactiveFormsModule,
    ],
    exports: [
    ],
    providers: [ ]
})

export class BackendModule {}
