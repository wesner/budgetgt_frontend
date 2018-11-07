import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCCComponent } from './form-cc.component';

describe('FormCCComponent', () => {
  let component: FormCCComponent;
  let fixture: ComponentFixture<FormCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
