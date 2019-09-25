import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TestComponent } from './test/test.component';
import { FilterComponent } from './search/filter/filter.component';
import { FlightsComponent } from './flights/flights.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'flights', component: FlightsComponent},
  {path: 'test', component: TestComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'test', component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
