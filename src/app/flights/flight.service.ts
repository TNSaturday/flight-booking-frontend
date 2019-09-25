import { Injectable } from '@angular/core';
import { Flight } from './flight.model';
import { SearchFlightForm } from '../search/form/SearchFlightForm';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flights: Flight[];
  searchResults: Flight[];

  constructor() {
    this.flights = [
      new Flight(1, 'S7 16', 3115, 90,
        'Saint-Petersburg', 'LED', new Date(2019, 9, 27, 10, 55),
        'Moscow', 'DME', new Date(2019, 9, 27, 12, 25)),
      new Flight(2, 'S7 40', 4375, 90,
        'Moscow', 'DME', new Date(2019, 9, 27, 15, 20),
        'Saint-Petersburg', 'LED', new Date(2019, 9, 27, 16, 50)),
      new Flight(3, 'S7 50', 6000, 90,
        'Voronezh', 'DME', new Date(2019, 9, 27, 15, 20),
        'Chelyabinsk', 'LED', new Date(2019, 9, 27, 16, 50)),
      new Flight(4, 'S7 40', 9000, 90,
        'Chelyabinsk', 'DME', new Date(2019, 9, 27, 15, 20),
        'Novosibirsk', 'LED', new Date(2019, 9, 27, 16, 50)),
    ];
   }

  getFlights(): Flight[] {
    return this.flights;
  }

  // performSearch(): Flight[] {
  //   this.searchResults = this.flights.filter(flight => {
  //     return flight.depCity === 'Voronezh';
  //   });
  //   // return this.flights;
  //   return this.searchResults;
  // }

  performSearch(form): Flight[] {
    this.searchResults = this.flights.filter(el => {
      return el.depCity === form.from;
    });
    return this.searchResults;
  }

  getSearchResults(): Flight[] {
    return this.searchResults;
  }
}
