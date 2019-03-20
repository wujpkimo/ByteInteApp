import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Revenue2Component } from './revenue2.component';

describe('Revenue2Component', () => {
  let component: Revenue2Component;
  let fixture: ComponentFixture<Revenue2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Revenue2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Revenue2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
