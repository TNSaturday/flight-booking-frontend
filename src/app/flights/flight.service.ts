import { Injectable } from '@angular/core';
import { Flight } from './flight.model';
import { SearchFlightForm } from '../search/form/SearchFlightForm';
interface DeparturesFromCity {
  departure: string;
  arrival: string[];
}

interface IRoute {
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
  routes: IRoute[];

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

  x() {
    return this.performSearch('LED', 'DME');
  }
  getRoute(form, matrix: DeparturesFromCity[] = this.flightMatrix) {
    const routes = new Array();
    const transferArr = new Array();
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
          transferArr.push(this.performSearch(depCode, arrCode));
          // const route = {};
          // route.flights.push(this.performSearch(depCode, arrCode)));
          // route.transfers = 1;
          // route.depCity=form.from;
          // route.depTime= взять из найденного рейса
          // route.arrCity= form.to
          // route.arrTime=взять из найденного рейса
          // route.duration=route.arrTime - route.depTime
          // routes.push(route);
        }
      } else {
          const transfer1 = matrix.filter(element => element.departure === transfer0Code); // ['LED', 'OVB', 'SVX', 'CEK', 'VOZ']
          transfer1[0].arrival.forEach(transfer1Code => {
            if (transfer1Code === arrCode) {
              if ((this.performSearch(depCode, transfer0Code).length > 0 ) &&
                 (this.performSearch(transfer0Code, arrCode).length > 0)) {
                transferArr.push(
                  this.performSearch(depCode, transfer0Code),
                  this.performSearch(transfer0Code, arrCode));
              }
            } else {
              const transfer2 = matrix.filter(element => element.departure === transfer1Code); // ['LED', 'OVB', 'SVX', 'CEK', 'VOZ']
              transfer2[0].arrival.forEach(transfer2Code => {
                if (transfer2Code === arrCode) {
                  // tslint:disable-next-line: max-line-length
                  if (this.performSearch(depCode, transfer0Code).length > 0 &&
                      this.performSearch(transfer0Code, transfer1Code).length > 0 &&
                      this.performSearch(transfer1Code, arrCode).length > 0 ) {
                    transferArr.push(
                      this.performSearch(depCode, transfer0Code),
                      this.performSearch(transfer0Code, transfer1Code),
                      this.performSearch(transfer1Code, arrCode));
                  }
                }
            });
           }
          });
        }
    });

    // for (const [key, value] of Object.entries(transfer0[0].arrival)) { // ['DME', 'SVX']
    //   console.log(typeof(transfer0[0].arrival));
    //   if (value === arrCode) {
    //     if (this.performSearch(depCode, arrCode)) {
    //       transferArr.push(
    //         this.performSearch(depCode, arrCode));
    //     }
    //   } else {
    //     // Transfer 1
    //     const transfer1 = matrix.filter(element => element.departure === value);
    //     for (const [key1, value1] of Object.entries(transfer1[0].arrival)) {
    //       if (value1 === arrCode) {
    //         const result1 = this.performSearch(depCode, value);
    //         const result2 = this.performSearch(value, arrCode);
    //         if (result1.length > 0 && result2.length > 0) {
    //           transferArr.push(
    //             this.performSearch(depCode, value1),
    //             this.performSearch(value1, arrCode));
    //         }
    //       } else {
    //         // Transfer 2
    //         const transfer2 = matrix.filter(element => element.departure === value1);
    //         for (const [key2, value2] of Object.entries(transfer2[0].arrival)) {
    //           if (value2 === arrCode) {
    //             const result1 = this.performSearch(depCode, value);
    //             const result2 = this.performSearch(value, value1);
    //             const result3 = this.performSearch(value1, arrCode);
    //             console.log('pare1' + depCode, value1, '; pare2' + value1, value2, '; pare3' + value2, arrCode);
    //             if (result1.length > 0 && result2.length > 0 && result3.length > 0) {
    //               transferArr.push(
    //                 this.performSearch(depCode, value1),
    //                 this.performSearch(value1, value2),
    //                 this.performSearch(value2, arrCode));
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    return transferArr.length > 0 ? transferArr : null;
  }
}
