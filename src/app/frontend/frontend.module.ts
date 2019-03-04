import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Custom modules
import { FrontendRouterModule } from '../frontend/frontend-routes.modules';
import { MediaModule } from '../media/media.module';

// Declarations
import { FrontendDeclarations } from '../frontend';

@NgModule({
    declarations: [
        ...FrontendDeclarations
    ],
    imports: [
        BrowserModule,
        FrontendRouterModule,
        HttpClientModule,
        HttpModule,
        MediaModule,
        ReactiveFormsModule
    ],
    exports: [
        ...FrontendDeclarations
    ],
    providers: []
})

export class FrontendModule {}
