import { Component, OnInit } from '@angular/core';
import { Flight } from '../flights/flight.model';
import { flights } from '../flights/flight.data';
import { Router } from '@angular/router';
import { FlightService } from '../flights/flight.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  flights: Flight[];
  flightsString: string;
  flightStorage;
  displayedColumns: string[] = [
    'Id', 'Company', 'Name', 'From', 'From Code', 'To', 'To Code',
    'Departure Date/Time', 'Arrival Date/Time', 'Price', 'Duration', 'Actions'];
  constructor(private flightService: FlightService, private router: Router) {
  }


  ngOnInit() {
    // this.flightsString = JSON.stringify(flights);
    // this.flightStorage.setItem('flights', this.flightsString);
    this.getFlights();
  }

  getFlights() {
    this.flightStorage = window.localStorage;
    this.flightsString = JSON.stringify(this.flightService.getFlights());
    this.flightStorage.setItem('flights', this.flightsString);
    this.flights = JSON.parse(this.flightStorage.flights);
  }

  editFlight(flight) {
    console.log(flight);
  }

  deleteFlight(flight) {
    const newArray = this.flights.filter( el => el.id !== flight.id );
    this.flightsString = JSON.stringify(newArray);
    this.flightStorage.setItem('flights', this.flightsString);
    location.reload();
  }
}
