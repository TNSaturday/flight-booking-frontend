import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SearchFlightForm} from "../../flights/flight.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // Two way field
  // twoWay = false;
  classes = ['Economy', 'First', 'Business'];
  today = new Date();
  halfYear = new Date(this.today.getTime() + 180 * 24 * 60 * 60 * 1000);
  // nextWeek = new Date(this.todayDay.getTime() + 7 * 24 * 60 * 60 * 1000);
  minDate = this.today;
  maxDate = this.halfYear;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const isVAlid = form.valid;
    const searchForm = form.value as SearchFlightForm;
    //
    // this.searchService.performSearch(searchForm)
    //   .subscribe(
    //     () => {
    //       router.navigate('/results');
    //     },
    //     () => {
    //
    //     }
    //   )
  }

}
