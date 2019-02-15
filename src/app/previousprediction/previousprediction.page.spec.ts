import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviouspredictionPage } from './previousprediction.page';

describe('PreviouspredictionPage', () => {
  let component: PreviouspredictionPage;
  let fixture: ComponentFixture<PreviouspredictionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviouspredictionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviouspredictionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
