import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTransactionsComponent } from './todo-transactions.component';

describe('TodoTransactionsComponent', () => {
  let component: TodoTransactionsComponent;
  let fixture: ComponentFixture<TodoTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoTransactionsComponent]
    });
    fixture = TestBed.createComponent(TodoTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
