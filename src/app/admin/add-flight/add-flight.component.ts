import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../flights/flight.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {
  privileges = ['Economy', 'Business'];
  today = new Date();
  halfYear = new Date(this.today.getTime() + 180 * 24 * 60 * 60 * 1000);
  minDate = this.today;
  maxDate = this.halfYear;
  constructor(private flightService: FlightService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
