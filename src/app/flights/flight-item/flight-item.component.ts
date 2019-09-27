import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Flight } from '../flight.model';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.scss']
})
export class FlightItemComponent implements OnInit {
  @Input() flight: Flight;
  constructor(
    private router: Router,
    private flightService: FlightService) { }

  ngOnInit() {
  }

  details(): void {
    console.log(this.flight);
    this.flightService.selectFlight(this.flight);
    // myStorage.setItem('flight', JSON.stringify(this.flight));
    this.router.navigate(['/details']);

  }
  onSubmit(form: NgForm) {
    console.log(form);
  }
}
