import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDBTComponent } from './list-dbt.component';

describe('ListDBTComponent', () => {
  let component: ListDBTComponent;
  let fixture: ComponentFixture<ListDBTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDBTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDBTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
