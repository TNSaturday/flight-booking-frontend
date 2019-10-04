import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ticket } from '../ticket.model';
import { OrderService } from '../order.service';
import { OrderForm } from '../order.model';

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
  order;
  client;
  orderBooked = false;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.order = this.orderService.order;
  }

  onSubmit(form: NgForm) {
    this.client = form.value as OrderForm;
    this.orderBooked = true;
    console.log(this.client);
    console.log(this.order);
  }

}
