import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Flight } from '../flights/flight.model';

@Component({
  selector: 'app-obs-test',
  templateUrl: './obs-test.component.html',
  styleUrls: ['./obs-test.component.scss']
})
export class ObsTestComponent implements OnInit {
  private flightsUrl = 'http://www.flight-api.ru/flights';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const flights = this.getFlights();
    const flightsObserver = {
      next: flight => console.log(flight),
      error: msg =>  console.log('Error: ', msg),
      complete: () => console.log('Finish!')
    };
    flights.subscribe(flightsObserver);
  }

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.flightsUrl);
  }

}
