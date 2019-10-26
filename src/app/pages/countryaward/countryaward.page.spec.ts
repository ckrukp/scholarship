import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryawardPage } from './countryaward.page';

describe('CountryawardPage', () => {
  let component: CountryawardPage;
  let fixture: ComponentFixture<CountryawardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryawardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryawardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
