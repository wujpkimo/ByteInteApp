import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertatComponent } from './overtat.component';

describe('OvertatComponent', () => {
  let component: OvertatComponent;
  let fixture: ComponentFixture<OvertatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvertatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvertatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
