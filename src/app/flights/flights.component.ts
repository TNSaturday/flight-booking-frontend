import { Component, OnInit } from '@angular/core';
import { FlightService } from './flight.service';
import { Flight } from './flight.model';
import { Router } from '@angular/router';
import { OrderService } from './order.service';
import { OrderForm } from './order.model';


@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  public show = true;
  routes = [];
  routesByTime = [];
  routesByPrice = [];
  routesEmpty = false;
  selectedRoute;
  flights;
  constructor(private flightService: FlightService, private router: Router, private orderService: OrderService) {
  }

  ngOnInit() {
    this.getRoutes();
    if (this.routes === null || this.routes === undefined || this.routes.length === 0 ) {
      this.routesEmpty = true;
    } else {
      this.routesEmpty = false;
      this.routesByTime = this.routes.sort((a, b) => (a.duration > b.duration) ? 1 : -1);
      this.routesByPrice = this.routes.sort((a, b) => (a.price > b.price) ? 1 : -1);
    }
  }

  getRoutes(): any {
    this.routes = this.flightService.getFlightRoute();
  }

  showFlights(route): void {
    this.selectedRoute = route;
    this.flights = this.selectedRoute.flights;
  }

  closeFlights(): void {
    this.selectedRoute = null;
  }

  bookRoute(route): void {
    this.orderService.bookOrder(route);
    this.router.navigate(['order']);
  }


}
