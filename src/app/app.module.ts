import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Other modules
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// Custom modules
import { AppRouterModule } from './routes.modules';
import { BackendModule } from './backend/backend.module';
import { FrontendModule } from './frontend/frontend.module';

// Service imports
import { AccountsService } from './backend/shared/accounts.service';
import { AuthService } from './account/auth/shared/auth.service';
import { BackendService } from './backend/shared/backend.service';
import { DynamicService } from './core/shared/dynamic.service';
import { EndpointsService } from './core/shared/endpoint.service';
import { MediaService } from './media/shared/media.service';
import { SessionService } from './core/shared/session.service';
import { SignupService } from './account/auth/shared/signup.service';

// Declarations
import { AcctDeclarations } from './account';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ...AcctDeclarations,
  ],
  imports: [
    BackendModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FrontendModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModalModule,
    AppRouterModule
  ],
  providers: [
    AccountsService,
    AuthService,
    BackendService,
    DynamicService,
    EndpointsService,
    MediaService,
    SessionService,
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
