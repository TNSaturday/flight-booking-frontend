import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Flight } from '../flights/flight.model';

@Component({
  selector: 'app-obs-test',
  templateUrl: './obs-test.component.html',
  styleUrls: ['./obs-test.component.scss']
})
export class ObsTestComponent implements OnInit {
  private flights: Flight[];
  private flightsUrl = 'http://www.flight-api.ru/flights';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFlights();
  }

  getFlights(): void {
    this.getFlightsService()
      .subscribe(data => {
        this.flights = data;
      });
  }

  getFlightsService(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.flightsUrl);
  }
}
