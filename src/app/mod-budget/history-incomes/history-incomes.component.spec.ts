import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryIncomesComponent } from './history-incomes.component';

describe('HistoryIncomesComponent', () => {
  let component: HistoryIncomesComponent;
  let fixture: ComponentFixture<HistoryIncomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryIncomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryIncomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
