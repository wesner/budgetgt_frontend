import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPaymentDBTComponent } from './new-payment-dbt.component';

describe('NewPaymentDBTComponent', () => {
  let component: NewPaymentDBTComponent;
  let fixture: ComponentFixture<NewPaymentDBTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPaymentDBTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPaymentDBTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
