import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarPage } from './scholar.page';

describe('ScholarPage', () => {
  let component: ScholarPage;
  let fixture: ComponentFixture<ScholarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScholarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
