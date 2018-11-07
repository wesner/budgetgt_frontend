import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDBTComponent } from './main-dbt.component';

describe('MainDBTComponent', () => {
  let component: MainDBTComponent;
  let fixture: ComponentFixture<MainDBTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDBTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDBTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
