import { Injectable } from '@angular/core';
import { Flight } from './flight.model';
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
      new Flight(1, 'S7 16', 3115, 90,
        'Moscow', 'DME', new Date(2019, 9, 27, 10, 55),
        'Saint-Petersburg', 'LED', new Date(2019, 9, 27, 12, 25)),
      new Flight(2, 'S7 38', 4375, 90,
        'Moscow', 'DME', new Date(2019, 9, 27, 15, 20),
        'Voronezh', 'VOZ', new Date(2019, 9, 27, 16, 50)),
      new Flight(3, 'S7 50', 6000, 90,
        'Voronezh', 'VOZ', new Date(2019, 9, 27, 15, 20),
        'Chelyabinsk', 'CEK', new Date(2019, 9, 27, 16, 50)),
      new Flight(4, 'S7 40', 9000, 90,
        'Chelyabinsk', 'CEK', new Date(2019, 9, 27, 15, 20),
        'Novosibirsk', 'OVB', new Date(2019, 9, 27, 16, 50)),
      new Flight(5, 'S7 40', 9000, 90,
        'Saint-Petersburg', 'LED', new Date(2019, 9, 27, 15, 20),
        'Moscow', 'DME', new Date(2019, 9, 27, 16, 50)),
      new Flight(6, 'S7 40', 9000, 90,
        'Moscow', 'DME', new Date(2019, 9, 27, 15, 20),
        'Chelyabinsk', 'CEK', new Date(2019, 9, 27, 16, 50)),
      new Flight(7, 'S7 40', 9000, 90,
        'Chelyabinsk', 'CEK', new Date(2019, 9, 27, 15, 20),
        'Vladivostok', 'VVO', new Date(2019, 9, 27, 16, 50)),
    ];
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

  performSearch(dep, arr): Flight[] {
    this.searchResults = this.flights.filter(el => {
      return (el.depCode === dep) && (el.arrCode === arr);
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
    return codeObj[0].code;
  }

  getRoute(form, matrix: DeparturesFromCity[] = this.flightMatrix) {
    const routes = [];
    // const transferArr = [];
    const depCode = this.getCityCode(form.from); // LED
    const arrCode = this.getCityCode(form.to); // VVO
    // Transfer 0
    const transfer0 = matrix.filter(element => element.departure === depCode); // ['DME', 'SVX']

    if (!transfer0[0]) { // if null results
      return null;
    }

    transfer0[0].arrival.forEach(transfer0Code => { // ['DME', 'SVX']
      if (transfer0Code === arrCode) {
        if (this.performSearch(depCode, arrCode).length > 0) {
          // -----------------------------------------
          // Use this if createRoute functions breaks
          // -----------------------------------------
          const flights = this.performSearch(depCode, arrCode);
          const transfers = 0;
          const depCity = form.from;
          const depTime = flights[0].depTime;
          const arrCity = form.to;
          const arrTime = flights[0].arrTime;
          const duration = arrTime.getTime() - depTime.getTime();
          const route: IRoute = {
            flights,
            transfers,
            depCity,
            depTime,
            arrCity,
            arrTime,
            duration
          };
          // -----------------------------------------
          routes.push(route);
        }
      } else {
          const transfer1 = matrix.filter(element => element.departure === transfer0Code); // ['LED', 'OVB', 'SVX', 'CEK', 'VOZ']
          transfer1[0].arrival.forEach(transfer1Code => {
            if (transfer1Code === arrCode) {
              const flight1 = this.performSearch(depCode, transfer0Code);
              const flight2 = this.performSearch(transfer0Code, arrCode);
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
                  const duration = arrTime.getTime() - depTime.getTime();
                  const route: IRoute = {
                    flights,
                    transfers,
                    depCity,
                    depTime,
                    arrCity,
                    arrTime,
                    duration
                  };
                  // -----------------------------------------
                  routes.push(route);
              }
            } else {
              const transfer2 = matrix.filter(element => element.departure === transfer1Code); // ['LED', 'OVB', 'SVX', 'CEK', 'VOZ']
              transfer2[0].arrival.forEach(transfer2Code => {
                if (transfer2Code === arrCode) {
                  const flight1 = this.performSearch(depCode, transfer0Code);
                  const flight2 = this.performSearch(transfer0Code, transfer1Code);
                  const flight3 = this.performSearch(transfer1Code, arrCode);
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
                        const duration = arrTime.getTime() - depTime.getTime();
                        const route: IRoute = {
                          flights,
                          transfers,
                          depCity,
                          depTime,
                          arrCity,
                          arrTime,
                          duration
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
