/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LinePlotComponent } from './line-plot.component';

describe('LinePlotComponent', () => {
  let component: LinePlotComponent;
  let fixture: ComponentFixture<LinePlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinePlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
