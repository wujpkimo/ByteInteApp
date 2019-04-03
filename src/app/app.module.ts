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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Revenue2Component } from './revenue2/revenue2.component';
import { LayoutComponent } from './layout/layout.component';


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
    Revenue2Component,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
