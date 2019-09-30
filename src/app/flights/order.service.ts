import { Injectable } from '@angular/core';
import { IRoute } from './flight.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order;
  constructor() { }

  bookOrder(route) {
    this.order = route;
  }
}
