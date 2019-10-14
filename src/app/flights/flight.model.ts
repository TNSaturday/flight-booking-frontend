export class Flight {
  constructor(
    public id: number,
    public company: string,
    public name: string,
    public price: number,
    public seatsTotal: number,
    public seatsFree: number,
    public duration: number,
    public depCity: string,
    public depCode: string,
    public depTime: Date,
    public arrCity: string,
    public arrCode: string,
    public arrTime: Date,
    public transfers: number
  ) { }
}

export interface SearchFlightForm {
  from: string;
  to: string;
  departure: string;
}
