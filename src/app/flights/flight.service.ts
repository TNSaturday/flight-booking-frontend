import { Injectable } from '@angular/core';
import { Flight } from './flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flights: Flight[];

  constructor() {
    this.flights = [
      new Flight(1, 'S7 16', 3115, 90,
        'Saint-Petersburg', 'LED', new Date(2019, 9, 27, 10, 55),
        'Moscow', 'DME', new Date(2019, 9, 27, 12, 25)),
      new Flight(2, 'S7 40', 4375, 90,
        'Moscow', 'DME', new Date(2019, 9, 27, 15, 20),
        'Saint-Petersburg', 'LED', new Date(2019, 9, 27, 16, 50)),
    ];
   }

   getFlights(): Flight[] {
     return this.flights;
   }
}
