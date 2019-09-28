import { Component, OnInit } from '@angular/core';
import { FlightService } from './flight.service';
import { Flight } from './flight.model';


@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  public show = true;
  routes;
  selectedRoute;
  flights;
  constructor(
    private flightService: FlightService) {
  }

  ngOnInit() {
    this.getRoutes();
    console.log(this.routes);
  }

  getRoutes(): any {
    this.routes = this.flightService.getFlightRoute();
  }

  showFlights(route): void {
    // this.show = !this.show;
    this.selectedRoute = route;
    this.flights = this.selectedRoute.flights;
  }

  closeFlights(): void {
    // this.show = !this.show;
    this.selectedRoute = null;
  }
}
