import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedIncomesComponent } from './fixed-incomes.component';

describe('FixedIncomesComponent', () => {
  let component: FixedIncomesComponent;
  let fixture: ComponentFixture<FixedIncomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedIncomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedIncomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
