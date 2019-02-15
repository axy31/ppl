import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualscoresPage } from './actualscores.page';

describe('ActualscoresPage', () => {
  let component: ActualscoresPage;
  let fixture: ComponentFixture<ActualscoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualscoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualscoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
