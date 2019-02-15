import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionarchivePage } from './predictionarchive.page';

describe('PredictionarchivePage', () => {
  let component: PredictionarchivePage;
  let fixture: ComponentFixture<PredictionarchivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionarchivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionarchivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
