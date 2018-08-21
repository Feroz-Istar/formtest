import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTest1Component } from './form-test1.component';

describe('FormTest1Component', () => {
  let component: FormTest1Component;
  let fixture: ComponentFixture<FormTest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
