import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-obs-test',
  templateUrl: './obs-test.component.html',
  styleUrls: ['./obs-test.component.scss']
})
export class ObsTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getFlights();
  }

  getFlights() {
    const flights = from(fetch('http://www.flight-api.ru/flights'));

    flights.subscribe({
      next(response) { console.log(response); },
      error(err) { console.log(err); },
      complete() { console.log('Complete!'); }
    });
  }

}
