import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIncomeComponent } from './form-income.component';

describe('FormIncomeComponent', () => {
  let component: FormIncomeComponent;
  let fixture: ComponentFixture<FormIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
