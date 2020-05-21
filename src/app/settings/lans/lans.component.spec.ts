import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LansComponent } from './lans.component';

describe('LansComponent', () => {
  let component: LansComponent;
  let fixture: ComponentFixture<LansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
