import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFiComponent } from './form-fi.component';

describe('FormFiComponent', () => {
  let component: FormFiComponent;
  let fixture: ComponentFixture<FormFiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
