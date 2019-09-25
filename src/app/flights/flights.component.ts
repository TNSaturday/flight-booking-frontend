import { Component, OnInit } from '@angular/core';
import { FlightService } from './flight.service';
import { Flight } from './flight.model';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  flights: Flight[];
  constructor(private flightService: FlightService) {
   }

  ngOnInit() {
    this.getFlights();
    // console.log(this.flights);
  }

  getFlights(): void {
    this.flights = this.flightService.getSearchResults();
  }
}
