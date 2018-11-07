import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPaymentDBTComponent } from './history-payment-dbt.component';

describe('HistoryPaymentDBTComponent', () => {
  let component: HistoryPaymentDBTComponent;
  let fixture: ComponentFixture<HistoryPaymentDBTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryPaymentDBTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPaymentDBTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
