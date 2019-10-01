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
  routes;
  selectedRoute;
  flights;
  constructor(private flightService: FlightService, private router: Router, private orderService: OrderService) {
  }

  ngOnInit() {
    this.getRoutes();
    // console.log(this.routes);
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
    // console.log(`You are goind to book a flight from ${route.depCity} to ${route.arrCity} which costs ${route.price}`);
  }
}
