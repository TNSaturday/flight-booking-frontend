import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightItemComponent } from './flights/flight-item/flight-item.component';
import { FlightDetailComponent } from './flights/flight-detail/flight-detail.component';
import { FlightOrderComponent } from './flights/flight-order/flight-order.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FormComponent } from './search/form/form.component';
import { FilterComponent } from './search/filter/filter.component';
import { TestComponent } from './test/test.component';
import { CurrentTrainingComponent } from './test/current-training/current-training.component';
import { NewTrainingComponent } from './test/new-training/new-training.component';
import { PastTrainingComponent } from './test/past-training/past-training.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    FlightsComponent,
    FlightItemComponent,
    FlightDetailComponent,
    FlightOrderComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    FormComponent,
    FilterComponent,
    TestComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    AdminComponent
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
