import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedExpensesComponent } from './fixed-expenses.component';

describe('FixedExpensesComponent', () => {
  let component: FixedExpensesComponent;
  let fixture: ComponentFixture<FixedExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
