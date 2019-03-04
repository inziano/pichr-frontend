import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Custom modules
import {MediaRouterModule } from '../media/media-routes.module';

// Declarations
import {MediaDeclarations } from '../media';

@NgModule({
    declarations: [
        ...MediaDeclarations
    ],
    imports: [
        BrowserModule,
       MediaRouterModule,
        HttpClientModule,
        HttpModule,
        ReactiveFormsModule
    ],
    exports: [
        ...MediaDeclarations
    ],
    providers: []
})

export class MediaModule {}
