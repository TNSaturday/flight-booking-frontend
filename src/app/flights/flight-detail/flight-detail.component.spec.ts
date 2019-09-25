import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDetailComponent } from './flight-detail.component';

describe('FlightDetailComponent', () => {
  let component: FlightDetailComponent;
  let fixture: ComponentFixture<FlightDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
