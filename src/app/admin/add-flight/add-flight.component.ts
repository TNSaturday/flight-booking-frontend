import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../flights/flight.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from '../../flights/flight.model';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {
  flights: Flight[];
  privileges = ['Economy', 'Business'];
  today = new Date();
  halfYear = new Date(this.today.getTime() + 180 * 24 * 60 * 60 * 1000);
  minDate = this.today;
  maxDate = this.halfYear;
  flightsStorage = window.localStorage.getItem('flights');
  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const addForm = form.value;
    this.flights = JSON.parse(this.flightsStorage);
    const id = this.flights[this.flights.length - 1].id + 1;
    const company = addForm.company;
    const name = addForm.name;
    const price = addForm.price;
    const seatsTotal = addForm.seatsTotal;
    const seatsFree = seatsTotal;
    const from = addForm.from;
    const fromCode = this.flightService.getCityCode(from);
    const to = addForm.to;
    const toCode = this.flightService.getCityCode(to);
    const depDate = addForm.departureDate;
    const depTime = new Date(
      depDate.getUTCFullYear(),
      depDate.getUTCMonth(),
      depDate.getUTCDate() + 1,
      parseInt(addForm.depTime.substr(0, 2), 10),
      parseInt(addForm.depTime.substr(3, 2), 10)
    );
    const arrDate = addForm.arrivalDate;
    const arrTime = new Date(
      arrDate.getUTCFullYear(),
      arrDate.getUTCMonth(),
      arrDate.getUTCDate() + 1,
      parseInt(addForm.arrTime.substr(0, 2), 10),
      parseInt(addForm.arrTime.substr(3, 2), 10)
    );
    const diffMs = arrTime.getTime() - depTime.getTime();
    const duration = diffMs / 60000;
    const transfers = 0;
    const flight = new Flight(
      id, company, name, price, seatsTotal, seatsFree, duration, from, fromCode,
      depTime, to, toCode, arrTime, transfers);
    console.log(flight);
  }

}
