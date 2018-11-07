import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBudComponent } from './main-bud.component';

describe('MainBudComponent', () => {
  let component: MainBudComponent;
  let fixture: ComponentFixture<MainBudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
