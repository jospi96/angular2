import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElectromobilityComponent } from './electromobility/electromobility.component';
import { AddCoffeeComponent } from './coffee/add-coffee/add-coffee.component';
import { ListCoffeeComponent } from './coffee/list-coffee/list-coffee.component';
import { UpdateCoffeeComponent } from './coffee/update-coffee/update-coffee.component';
import { LoginComponent } from './coffee/login/login.component';
import { RegisterComponent } from './coffee/register/register.component';
import { HeaderComponent } from './templates/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent,
    ElectromobilityComponent,
    AddCoffeeComponent,
    ListCoffeeComponent,
    UpdateCoffeeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
