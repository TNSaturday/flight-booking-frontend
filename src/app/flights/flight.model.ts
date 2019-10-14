export interface Flight {
  id: number;
  company: string;
  name: string;
  price: number;
  seatsTotal: number;
  seatsFree: number;
  duration: number;
  depCity: string;
  depCode: string;
  depTime: Date;
  arrCity: string;
  arrCode: string;
  arrTime: Date;
  transfers: number;
}

export interface SearchFlightForm {
  from: string;
  to: string;
  departure: string;
}
