//import { cityMatrix } from './city-matrix';
import {Transfer} from './transfer';

interface DeparturesFromCity {
  departure: string;
  arrival: string[];
}

interface IFlight {
  from: string;
  to: string;
}

interface IRoute {
  flights: IFlight[];
}

const flightMatrix: DeparturesFromCity[] = [
  {departure: 'spb', arrival: ['msk', 'ekb']},
  {departure: 'msk', arrival: ['spb', 'nsk', 'ekb', 'che', 'vrn']},
  {departure: 'nsk', arrival: ['msk', 'ekb', 'che', 'vlv']},
  {departure: 'ekb', arrival: ['spb', 'msk', 'nsk', 'che', 'vrn', 'vlv']},
  {departure: 'che', arrival: ['msk', 'nsk', 'ekb', 'vrn']},
  {departure: 'vrn', arrival: ['msk', 'che']},
  {departure: 'vlv', arrival: ['nsk']}
];


// let flightMatrix = new cityMatrix().matrix;

function searchFlight(from: string, to: string, matrix) {
  let route = [];
  const transfers = getRoute(from, to, matrix);
  let elements = [];
  let elements1 = [];

  console.log(`transfer: \n${transfer}`);
}

interface IFlightSearchCriteria {
  // todo write code here
}

interface IRouteSearchCriteria {
// todo write code here
}


function findRoute(routeCriteria: IRouteSearchCriteria): IRoute[] {
  const emptyRoute: IRoute = {
    flights: [],
  };
  return addFlightsToRoutes(emptyRoute, 3, routeCriteria);
}

function addFlightsToRoutes(partialRoute: IRoute, maxLength: number, criteria: IRouteSearchCriteria): IRoute[] {
    if (isCorrectRoute(criteria, partialRoute)) {
      return [partialRoute];
    }
    const flightSearchCriteria = routeCriteriaToFlightCriteria(criteria, partialRoute);
    const flights = findFights(flightSearchCriteria);
    return  flights.map(f => {
      const r: IRoute = {
        flights: [...partialRoute.flights],
      };
      r.flights.push(f);
      return r;
    })
      .filter(r => r.flights.length < maxLength || isCorrectRoute(criteria, r))
      .reduce((accum, r) => accum.concat(addFlightsToRoutes(r, maxLength, criteria)), []);
}

function routeCriteriaToFlightCriteria(routeCriteria: IRouteSearchCriteria, partialRoute: IRoute): IFlightSearchCriteria {
  return null; // todo write code here
}

function isCorrectRoute(routeCriteria: IRouteSearchCriteria, partialRoute: IRoute): boolean {
  return true; // todo write code here
}

function findFights(criteria: IFlightSearchCriteria): IFlight[] {
  return []; // todo write code here
}

function getRoute(from: string, to: string, matrix: DeparturesFromCity[]) {
  const transferArr = [];
  // Transfer 0
  const transfer0 = matrix.filter(element => element.departure === from);
  if (!transfer0[0]) {
    return transferArr;
  }
  transfer0[0].arrival.forEach(city => {

  });
  for (let [key, value] of Object.entries(transfer0[0].arrival)) {
    if (value == to) {
      transferArr.push(`${transfer0[0].departure} --> ${value}\n`);
    } else {

      // Transfer 1
      var transfer1 = matrix.filter(element => element.departure == value);
      for (let [key1, value1] of Object.entries(transfer1[0].arrival)) {
        if (value1 == to) {
          let path1 = `${transfer0[0].departure} --> ${value}`;
          let path2 = `${transfer1[0].departure} --> ${value1}`;
          transferArr.push(`${path1}, ${path2}\n`);
        } else {

          // Transfer 2
          var transfer2 = matrix.filter(element => element.departure == value1);
          for (let [key2, value2] of Object.entries(transfer2[0].arrival)) {
            if (value2 == to) {
              let path1 = `${transfer0[0].departure} --> ${value}`;
              let path2 = `${transfer1[0].departure} --> ${value1}`;
              let path3 = `${transfer2[0].departure} --> ${value2}`;
              transferArr.push(`${path1}, ${path2}, ${path3}\n`);
            }
          }
        }
      }
    }
  }
  return transferArr;
}

searchFlight('spb', 'vrn', flightMatrix);
