import { Component, OnInit } from '@angular/core';
import { Flight } from '../flights/flight.model';
import { flights } from '../flights/flight.data';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  flights: Flight[];
  displayedColumns: string[] = [
    'Id', 'Name', 'From', 'From Code', 'To', 'To Code',
    'Departure Date/Time', 'Arrival Date/Time', 'Price', 'Duration'];
  constructor() {
    this.flights = flights;
  }

  ngOnInit() {
    flights.forEach(flight => {
      console.log(flight);
    });
  }
}
