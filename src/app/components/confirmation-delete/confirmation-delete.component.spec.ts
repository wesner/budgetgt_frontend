import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDeleteComponent } from './confirmation-delete.component';

describe('ConfirmationDeleteComponent', () => {
  let component: ConfirmationDeleteComponent;
  let fixture: ComponentFixture<ConfirmationDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
