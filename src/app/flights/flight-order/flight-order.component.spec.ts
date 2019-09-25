import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightOrderComponent } from './flight-order.component';

describe('FlightOrderComponent', () => {
  let component: FlightOrderComponent;
  let fixture: ComponentFixture<FlightOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
