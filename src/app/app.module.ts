import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightDetailComponent } from './flights/flight-detail/flight-detail.component';
import { FlightOrderComponent } from './flights/flight-order/flight-order.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FormComponent } from './search/form/form.component';
import { FilterComponent } from './search/filter/filter.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './auth/auth.service';
import { AddFlightComponent } from './admin/add-flight/add-flight.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    FlightsComponent,
    FlightDetailComponent,
    FlightOrderComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    FormComponent,
    FilterComponent,
    AdminComponent,
    AddFlightComponent,
    AddCompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
