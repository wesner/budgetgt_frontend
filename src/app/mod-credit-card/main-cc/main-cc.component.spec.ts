import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCCComponent } from './main-cc.component';

describe('MainCCComponent', () => {
  let component: MainCCComponent;
  let fixture: ComponentFixture<MainCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
