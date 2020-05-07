import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTreeComponent } from './class-tree.component';

describe('ClassTreeComponent', () => {
  let component: ClassTreeComponent;
  let fixture: ComponentFixture<ClassTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
