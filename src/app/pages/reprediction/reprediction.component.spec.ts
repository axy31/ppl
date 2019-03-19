import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepredictionComponent } from './reprediction.component';

describe('RepredictionComponent', () => {
  let component: RepredictionComponent;
  let fixture: ComponentFixture<RepredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
