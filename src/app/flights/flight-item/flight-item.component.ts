import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.scss']
})
export class FlightItemComponent implements OnInit {
  @Input() flight: Flight;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
