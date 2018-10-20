import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFeComponent } from './form-fe.component';

describe('FormFeComponent', () => {
  let component: FormFeComponent;
  let fixture: ComponentFixture<FormFeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
