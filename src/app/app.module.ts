import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { RevenueComponent } from './revenue/revenue.component';
import { OverdueComponent } from './overdue/overdue.component';
import { OvertatComponent } from './overtat/overtat.component';
import { CapacityComponent } from './capacity/capacity.component';
import { HomeComponent } from './home/home.component';
import { ToNumberPipe } from './_pipe/to-number.pipe';

import { LoginComponent } from './login/login.component';
import { AlertComponent } from './_components/alert/alert.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { fakeBackendProvider } from './_helpers/fake-backend';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RevenueComponent,
    OverdueComponent,
    OvertatComponent,
    CapacityComponent,
    HomeComponent,
    ToNumberPipe,
    LoginComponent,
    AlertComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
