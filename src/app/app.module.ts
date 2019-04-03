import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';


// Other modules
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// Custom modules
import { AppRouterModule } from './routes.modules';
import { BackendModule } from './backend/backend.module';
import { FrontendModule } from './frontend/frontend.module';

// Reducers
import { notificationreducer } from './core/reducers/notification.reducer';

// Service imports
import { AccountsService } from './backend/shared/accounts.service';
import { AuthService } from './account/auth/shared/auth.service';
import { BackendService } from './backend/shared/backend.service';
import { DynamicService } from './core/shared/dynamic.service';
import { EndpointsService } from './core/shared/endpoint.service';
import { MediaService } from './media/shared/media.service';
import { PusherService } from './core/shared/pusher.service';
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
    AppRouterModule,
    StoreModule.forRoot({
      notification: notificationreducer
    })
  ],
  providers: [
    AccountsService,
    AuthService,
    BackendService,
    DynamicService,
    EndpointsService,
    MediaService,
    PusherService,
    SessionService,
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
