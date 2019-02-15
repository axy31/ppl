import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakepredictionPage } from './makeprediction.page';

describe('MakepredictionPage', () => {
  let component: MakepredictionPage;
  let fixture: ComponentFixture<MakepredictionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakepredictionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakepredictionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
