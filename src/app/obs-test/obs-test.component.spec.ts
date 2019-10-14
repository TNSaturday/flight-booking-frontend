import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsTestComponent } from './obs-test.component';

describe('ObsTestComponent', () => {
  let component: ObsTestComponent;
  let fixture: ComponentFixture<ObsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
