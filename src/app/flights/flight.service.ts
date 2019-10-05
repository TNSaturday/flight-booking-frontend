import { Injectable } from '@angular/core';
import { Flight } from './flight.model';
import { flights } from '../flights/flight.data';

interface DeparturesFromCity {
  departure: string;
  arrival: string[];
}

export interface IRoute {
  flights: Flight[];
  transfers: number;
  depCity: string;
  depTime: Date;
  arrCity: string;
  arrTime: Date;
  duration: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  flightMatrix: DeparturesFromCity[] = [
    {departure: 'LED', arrival: ['DME', 'SVX']},
    {departure: 'DME', arrival: ['LED', 'OVB', 'SVX', 'CEK', 'VOZ']},
    {departure: 'OVB', arrival: ['DME', 'SVX', 'CEK', 'VVO']},
    {departure: 'SVX', arrival: ['LED', 'DME', 'OVB', 'CEK', 'VOZ', 'VVO']},
    {departure: 'CEK', arrival: ['DME', 'OVB', 'SVX', 'VOZ', 'VVO']},
    {departure: 'VOZ', arrival: ['DME', 'CEK']},
    {departure: 'VVO', arrival: ['OVB']}
  ];
  cityToCode = [
    {city: 'Saint-Petersburg', code: 'LED'},
    {city: 'Moscow', code: 'DME'},
    {city: 'Voronezh', code: 'VOZ'},
    {city: 'Chelyabinsk', code: 'CEK'},
    {city: 'Novosibirsk', code: 'OVB'},
    {city: 'Vladivostok', code: 'VVO'},
    {city: 'Ekaterinburg', code: 'SVX'},
  ];
  flights: Flight[];
  searchResults: Flight[];
  transfer: IRoute[];
  selectedFlight: IRoute[];

  constructor() {
    this.flights = [
      new Flight(1, 'S7 78', 3115, 90,
        'Moscow', 'DME', new Date(2019, 9, 4, 10, 55),
        'Saint-Petersburg', 'LED', new Date(2019, 9, 4, 12, 25)),
      new Flight(2, 'S7 36', 4375, 60,
        'Moscow', 'DME', new Date(2019, 9, 4, 15, 20),
        'Voronezh', 'VOZ', new Date(2019, 9, 4, 16, 20)),
      new Flight(3, 'S7 74', 6000, 70,
        'Voronezh', 'VOZ', new Date(2019, 9, 4, 15, 20),
        'Chelyabinsk', 'CEK', new Date(2019, 9, 4, 16, 30)),
      new Flight(4, 'S7 42', 8000, 140,
        'Chelyabinsk', 'CEK', new Date(2019, 9, 4, 15, 20),
        'Novosibirsk', 'OVB', new Date(2019, 9, 4, 17, 40)),
      new Flight(5, 'S7 99', 3545, 90,
        'Saint-Petersburg', 'LED', new Date(2019, 9, 4, 15, 20),
        'Moscow', 'DME', new Date(2019, 9, 4, 16, 50)),
      new Flight(6, 'S7 74', 6400, 110,
        'Moscow', 'DME', new Date(2019, 9, 4, 15, 20),
        'Chelyabinsk', 'CEK', new Date(2019, 9, 4, 17, 10)),
      new Flight(7, 'S7 25', 9315, 240,
        'Chelyabinsk', 'CEK', new Date(2019, 9, 4, 15, 20),
        'Vladivostok', 'VVO', new Date(2019, 9, 4, 19, 20)),
      new Flight(8, 'S7 78', 3115, 90,
        'Moscow', 'DME', new Date(2019, 9, 5, 10, 55),
        'Saint-Petersburg', 'LED', new Date(2019, 9, 5, 12, 25)),
      new Flight(9, 'S7 36', 4375, 60,
        'Moscow', 'DME', new Date(2019, 9, 5, 15, 20),
        'Voronezh', 'VOZ', new Date(2019, 9, 5, 16, 20)),
      new Flight(10, 'S7 74', 6000, 70,
        'Voronezh', 'VOZ', new Date(2019, 9, 5, 15, 20),
        'Chelyabinsk', 'CEK', new Date(2019, 9, 5, 16, 30)),
      new Flight(11, 'S7 42', 8000, 140,
        'Chelyabinsk', 'CEK', new Date(2019, 9, 5, 15, 20),
        'Novosibirsk', 'OVB', new Date(2019, 9, 5, 17, 40)),
      new Flight(12, 'S7 99', 3001, 90,
        'Saint-Petersburg', 'LED', new Date(2019, 9, 5, 15, 20),
        'Moscow', 'DME', new Date(2019, 9, 5, 16, 50)),
      new Flight(13, 'S7 74', 4590, 110,
        'Moscow', 'DME', new Date(2019, 9, 5, 15, 20),
        'Chelyabinsk', 'CEK', new Date(2019, 9, 5, 17, 10)),
      new Flight(14, 'S7 25', 9050, 240,
        'Chelyabinsk', 'CEK', new Date(2019, 9, 5, 15, 20),
        'Vladivostok', 'VVO', new Date(2019, 9, 5, 19, 20)),
    ];
  }

  getDate(date) {
    const newDate = new Date(date);
    const month = newDate.getMonth();
    const day = newDate.getDay();
    const year = newDate.getFullYear();

    return  year + '/' + month + '/' + day;
  }
  selectFlight(obj) {
    this.selectedFlight = obj;
  }
  returnSelectedFlight() {
    return this.selectedFlight;
  }

  getFlights(): Flight[] {
    return this.flights;
  }

  getFlightRoute(): IRoute[] {
    return this.transfer;
  }

  performSearch(dep, arr, day): Flight[] {
    this.searchResults = this.flights.filter(el => {
      return (el.depCode === dep)
        && (el.arrCode === arr)
        && (this.getDate(el.depTime) === this.getDate(day));
    });

    return this.searchResults;
  }

  getSearchResults(): Flight[] {
    return this.searchResults;
  }

  getCityCode(city) {
    const codeObj = this.cityToCode.filter(el => {
      return el.city === city;
    });

    if (codeObj[0]) {
      return codeObj[0].code;
    } else {
      return null;
    }
  }

  clearState() {
    this.searchResults = [];
    this.transfer = [];
    this.selectedFlight = [];
  }

  getRoute(form, matrix: DeparturesFromCity[] = this.flightMatrix) {
    this.clearState();
    const routes = [];
    // const transferArr = [];
    const depCode = this.getCityCode(form.from); // LED
    const arrCode = this.getCityCode(form.to); // VVO

    if (depCode === null || arrCode === null) { return null; }
    // Transfer 0
    const transfer0 = matrix.filter(element => element.departure === depCode); // ['DME', 'SVX']

    if (!transfer0[0]) { // if null results
      return null;
    }

    transfer0[0].arrival.forEach(transfer0Code => { // ['DME', 'SVX']
      if (transfer0Code === arrCode) {
        if (this.performSearch(depCode, arrCode, form.departureDate).length > 0) {
          // -----------------------------------------
          // Use this if createRoute functions breaks
          // -----------------------------------------
          const flights = this.performSearch(depCode, arrCode, form.departureDate);
          const transfers = 0;
          const depCity = form.from;
          const depTime = flights[0].depTime;
          const arrCity = form.to;
          const arrTime = flights[0].arrTime;
          const duration = flights[0].duration;
          const price = flights[0].price;
          const route: IRoute = {
            flights,
            transfers,
            depCity,
            depTime,
            arrCity,
            arrTime,
            duration,
            price
          };
          // -----------------------------------------
          routes.push(route);
        }
      } else {
          const transfer1 = matrix.filter(element => element.departure === transfer0Code); // ['LED', 'OVB', 'SVX', 'CEK', 'VOZ']
          transfer1[0].arrival.forEach(transfer1Code => {
            if (transfer1Code === arrCode) {
              const flight1 = this.performSearch(depCode, transfer0Code, form.departureDate);
              const flight2 = this.performSearch(transfer0Code, arrCode, form.departureDate);
              if ((flight1.length > 0 ) &&
                 (flight2.length > 0)) {
                  const flights = [
                    flight1[0],
                    flight2[0]];
                  const transfers = 1;
                  const depCity = form.from;
                  const depTime = flights[0].depTime;
                  const arrCity = form.to;
                  const arrTime = flights[1].arrTime;
                  const duration = flight1[0].duration + flight2[0].duration;
                  const price = flight1[0].price + flight2[0].price;
                  const route: IRoute = {
                    flights,
                    transfers,
                    depCity,
                    depTime,
                    arrCity,
                    arrTime,
                    duration,
                    price
                  };
                  // -----------------------------------------
                  routes.push(route);
              }
            } else {
              const transfer2 = matrix.filter(element => element.departure === transfer1Code); // ['LED', 'OVB', 'SVX', 'CEK', 'VOZ']
              transfer2[0].arrival.forEach(transfer2Code => {
                if (transfer2Code === arrCode) {
                  const flight1 = this.performSearch(depCode, transfer0Code, form.departureDate);
                  const flight2 = this.performSearch(transfer0Code, transfer1Code, form.departureDate);
                  const flight3 = this.performSearch(transfer1Code, arrCode, form.departureDate);
                  // tslint:disable-next-line: max-line-length
                  if (flight1.length > 0 &&
                      flight2.length > 0 &&
                      flight3.length > 0 ) {
                        const flights = [
                          flight1[0],
                          flight2[0],
                          flight3[0]];
                        const transfers = 2;
                        const depCity = form.from;
                        const depTime = flights[0].depTime;
                        const arrCity = form.to;
                        const arrTime = flights[2].arrTime;
                        const duration = flight1[0].duration + flight2[0].duration + flight3[0].duration;
                        const price = flight1[0].price + flight2[0].price + flight3[0].price;
                        const route: IRoute = {
                          flights,
                          transfers,
                          depCity,
                          depTime,
                          arrCity,
                          arrTime,
                          duration,
                          price
                        };
                        // -----------------------------------------
                        routes.push(route);
                  }
                }
            });
           }
          });
        }
    });
    this.transfer = routes;
    return routes.length > 0 ? routes : null;
  }
}
