import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-transactions',
  templateUrl: './todo-transactions.component.html',
  styleUrls: ['./todo-transactions.component.css'],
})
export class TodoTransactionsComponent {
  todoForm!: FormGroup;
  totalTodo: number = 0;
  filteredTodo: any[] = [];
  selectedMonth: any;
  expenses:{month:string,expenseAmount:number}[]=[
    {month:'january',expenseAmount:1500},
    {month:'february',expenseAmount:2000},
    {month:'march',expenseAmount:1800}


  ]
  januaryExpenses: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1000 },
    { expenseType: 'Light Bills', expenseAmount: 500},
  ];
  februaryExpenses: any[] = [
    { expenseType: 'Essentials', expenseAmount: 200 },
    { expenseType: 'Light Bills', expenseAmount: 400 },
  ];
  marchExpenses: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1100},
    { expenseType: 'Essentials', expenseAmount: 250 },
  ];
  monthSelected: boolean = false;
  constructor(private fb: FormBuilder, private router: Router) {
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', {
      month: 'long',
    });
  }
  ngOnInit(): void {
    this.createtodoForm();
  }
  createtodoForm() {
    this.todoForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required],
      // investments: ['', Validators.required],
    });
  }
  onChange(event: any) {
    this.selectedMonth = event.target.value.toLowerCase();
    this.monthSelected = true;
    this.totalTodo = this.calculatetotalTodo(this.selectedMonth);
    this.filteredTodo = this.getTodoForMonth(this.selectedMonth);
  }

  calculatetotalTodo(month: string): number {
    let totalTodo = 0;
    for (const income of this.getTodoForMonth(month)) {
      totalTodo += income.expenseAmount;
    }
    return totalTodo;
  }

  getTodoForMonth(month: string): any[] {
    switch (month) {
      case 'january':
        return this.januaryExpenses;
      case 'february':
        return this.februaryExpenses;
      case 'march':
        return this.marchExpenses;
      default:
        return [];
    }
  }
  // onChange(event: any) {
  //   this.selectedMonth = event.target.value;
  //   this.monthSelected = true;
  //   this.getfilteredTodo();
  // }
  // calculatetotalTodo(month: string): number {
  //   let totalTodo = 0;
  //   for (const income of this.getTodoForMonth(month)) {
  //     totalTodo += income.amount;
  //   }
  //   return totalTodo;
  // }
  // getTodoForMonth(month: string): any[] {
  //   switch (month) {
  //     case 'january':
  //       return this.januaryIncomes;
  //     case 'february':
  //       return this.februaryIncomes;
  //     case 'march':
  //       return this.marchIncomes;
  //     default:
  //       return [];
  //   }
  // }
  getFilteredTodo() {
    let filteredTodo: any[] = [];
    switch (this.selectedMonth) {
      case 'january':
        filteredTodo = [...this.januaryExpenses];
        break;
      case 'february':
        filteredTodo = [...this.februaryExpenses];
        break;
      case 'march':
        filteredTodo = [...this.marchExpenses];
        break;
      default:
        break;
    }
  }
  onSubmit() {
    if (this.todoForm.valid) {
      const newIncome = this.todoForm.value;
      switch (this.selectedMonth) {
        case 'january':
          this.januaryExpenses.push(newIncome);
          break;
        case 'february':
          this.februaryExpenses.push(newIncome);
          break;
        case 'march':
          this.marchExpenses.push(newIncome);
          break;
        default:
          break;
      }
      this.todoForm.reset();
      this.todoForm.patchValue({
        month: '',
        expenseType: '',
        expenseAmount:''
      });
    }
  }
  onBack() {
    this.router.navigate(['/budget-plan/dashboard']);
  }
  saveForm() {
    console.log('Form Saves');
  }
}
