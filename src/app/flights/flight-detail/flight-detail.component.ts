import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss']
})
export class FlightDetailComponent implements OnInit {
  flight;
  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.flight = this.flightService.returnSelectedFlight();
  }
}
