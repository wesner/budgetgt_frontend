import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFIComponent } from './list-fi.component';

describe('ListFIComponent', () => {
  let component: ListFIComponent;
  let fixture: ComponentFixture<ListFIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
