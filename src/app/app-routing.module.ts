import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FlightsComponent } from './flights/flights.component';
import { AdminComponent } from './admin/admin.component';
import { FlightDetailComponent } from './flights/flight-detail/flight-detail.component';
import { FlightOrderComponent } from './flights/flight-order/flight-order.component';
import { AddFlightComponent } from './admin/add-flight/add-flight.component';
import { ObsTestComponent } from './obs-test/obs-test.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'flights', component: FlightsComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'details', component: FlightDetailComponent},
  {path: 'order', component: FlightOrderComponent},
  {path: 'addflight', component: AddFlightComponent},
  {path: 'obs', component: ObsTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
