import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './page/dashboard/dashboard.module';
import { AuthModule } from './page/auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './shared/components/components.module';
import {registerLocaleData} from '@angular/common';

import localesEsAR from '@angular/common/locales/es-AR'
registerLocaleData(localesEsAR,'es-Ar')
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    AuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
