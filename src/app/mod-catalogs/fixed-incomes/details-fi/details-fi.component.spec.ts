import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFiComponent } from './details-fi.component';

describe('DetailsFiComponent', () => {
  let component: DetailsFiComponent;
  let fixture: ComponentFixture<DetailsFiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsFiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
