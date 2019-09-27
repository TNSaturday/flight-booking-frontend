import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {
  @Input() routes;
  constructor() { }

  ngOnInit() {
  }

}
