import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIncomesComponent } from './list-incomes.component';

describe('ListIncomesComponent', () => {
  let component: ListIncomesComponent;
  let fixture: ComponentFixture<ListIncomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIncomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIncomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
