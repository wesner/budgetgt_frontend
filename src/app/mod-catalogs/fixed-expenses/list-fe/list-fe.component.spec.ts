import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFeComponent } from './list-fe.component';

describe('ListFeComponent', () => {
  let component: ListFeComponent;
  let fixture: ComponentFixture<ListFeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
