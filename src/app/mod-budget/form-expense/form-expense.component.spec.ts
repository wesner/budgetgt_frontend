import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExpenseComponent } from './form-expense.component';

describe('FormExpenseComponent', () => {
  let component: FormExpenseComponent;
  let fixture: ComponentFixture<FormExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
