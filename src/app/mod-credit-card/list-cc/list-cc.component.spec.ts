import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCCComponent } from './list-cc.component';

describe('ListCCComponent', () => {
  let component: ListCCComponent;
  let fixture: ComponentFixture<ListCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
