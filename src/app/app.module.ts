import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {
    CommonModule,
    LocationStrategy,
    PathLocationStrategy,
} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { AppConfigComponent } from './app.config.component';
import { environment as env } from '../environments/environment';
import { SharedModule } from './_shared/shared.module';
import { windowProvider, WindowToken } from './_shared/window';
import { ErrorInterceptor } from './_helpers/error.interceptor';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule.forRoot(),
    ],
    declarations: [AppComponent, AppConfigComponent, AppMainComponent],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: WindowToken, useFactory: windowProvider },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
