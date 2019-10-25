import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholardetailsPage } from './scholardetails.page';

describe('ScholardetailsPage', () => {
  let component: ScholardetailsPage;
  let fixture: ComponentFixture<ScholardetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholardetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholardetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
