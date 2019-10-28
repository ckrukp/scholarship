import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterdetailPage } from './filterdetail.page';

describe('FilterdetailPage', () => {
  let component: FilterdetailPage;
  let fixture: ComponentFixture<FilterdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
