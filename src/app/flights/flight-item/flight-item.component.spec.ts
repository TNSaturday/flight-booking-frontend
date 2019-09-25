import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightItemComponent } from './flight-item.component';

describe('FlightItemComponent', () => {
  let component: FlightItemComponent;
  let fixture: ComponentFixture<FlightItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
