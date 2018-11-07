import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDBTComponent } from './details-dbt.component';

describe('DetailsDBTComponent', () => {
  let component: DetailsDBTComponent;
  let fixture: ComponentFixture<DetailsDBTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDBTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDBTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
