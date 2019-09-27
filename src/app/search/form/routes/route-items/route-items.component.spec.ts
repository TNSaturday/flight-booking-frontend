/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouteItemsComponent } from './route-items.component';

describe('RouteItemsComponent', () => {
  let component: RouteItemsComponent;
  let fixture: ComponentFixture<RouteItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
