import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../flights/flight.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {

  constructor(private flightService: FlightService) { }

  ngOnInit() {
  }

  onSubmit() {
    // this.flightService.addFlight(form: NgForm);
  }

}
