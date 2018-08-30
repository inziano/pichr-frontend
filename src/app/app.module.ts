import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Custom modules
import { AppRouterModule } from './routes.modules';
import { BackendModule } from './backend/backend.module';

// Service imports
import { EndpointsService } from './core/shared/endpoint.service';
import { SessionService } from './core/shared/session.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BackendModule,
    BrowserModule,
    AppRouterModule
  ],
  providers: [
    EndpointsService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
