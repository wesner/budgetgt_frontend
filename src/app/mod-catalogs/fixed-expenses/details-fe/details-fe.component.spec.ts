import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFeComponent } from './details-fe.component';

describe('DetailsFeComponent', () => {
  let component: DetailsFeComponent;
  let fixture: ComponentFixture<DetailsFeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsFeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
