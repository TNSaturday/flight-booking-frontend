import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-flight-order',
  templateUrl: './flight-order.component.html',
  styleUrls: ['./flight-order.component.scss']
})
export class FlightOrderComponent implements OnInit {
  tickets: Ticket[] = [
    new Ticket(1, '17A', 'Ручная кладь'),
    new Ticket(2, '18C', 'Ручная кладь'),
    new Ticket(1, '2A', 'Ручная кладь + Багаж'),
    new Ticket(1, '4B', 'Без багажа'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
