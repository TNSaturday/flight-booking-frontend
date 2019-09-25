export class Flight {
  constructor(
    public id: number, public name: string, public price: number,
    public duration: number, public depCity: string, public depCode: string,
    public depTime: Date, public arrCity: string, public arrCode: string,
    public arrTime: Date
  ) { }
}

export interface SearchFlightForm {
  from: string;
  to: string;
  departure: string;
}

