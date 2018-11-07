import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCCComponent } from './details-cc.component';

describe('DetailsCCComponent', () => {
  let component: DetailsCCComponent;
  let fixture: ComponentFixture<DetailsCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
