import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDBTComponent } from './form-dbt.component';

describe('FormDBTComponent', () => {
  let component: FormDBTComponent;
  let fixture: ComponentFixture<FormDBTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDBTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDBTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
