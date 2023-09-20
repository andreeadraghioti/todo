import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleTodoComponent } from './view-single-todo.component';

describe('ViewSingleTodoComponent', () => {
  let component: ViewSingleTodoComponent;
  let fixture: ComponentFixture<ViewSingleTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSingleTodoComponent]
    });
    fixture = TestBed.createComponent(ViewSingleTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
