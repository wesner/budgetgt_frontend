import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsExpenseComponent } from './details-expense.component';

describe('DetailsExpenseComponent', () => {
  let component: DetailsExpenseComponent;
  let fixture: ComponentFixture<DetailsExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
