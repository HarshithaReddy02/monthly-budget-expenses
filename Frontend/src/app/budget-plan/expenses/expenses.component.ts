import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BudgetPlanService } from '../budget-plan.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent {
  fetchexpenselist:any
  expenseForm!: FormGroup;
  totalExpenses: number = 0;
  filteredExpenses: any[] = [];
  selectedMonth: any;
  januaryExpenses: any[] = [
    { expenseType: 'Rent', expenseAmount: 1000 },
    { expenseType: 'Groceries', expenseAmount: 500 },
  ];
  februaryExpenses: any[] = [
    { expenseType: 'Utilities', expenseAmount: 200 },
    { expenseType: 'Groceries', expenseAmount: 400 },
  ];
  marchExpenses: any[] = [
    { expenseType: 'Ren', expenseAmount: 1100 },
    { expenseType: 'Utilities', expenseAmount: 250 },
  ];
  monthSelected: boolean = false;
  constructor(
    private fb: FormBuilder,
    private api: BudgetPlanService,
    private router: Router
  ) {
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', {
      month: 'long',
    });
  }
  ngOnInit(): void {
    this.createIncomeForm();
    this.fetchExpenses();
  }
  fetchExpenses(){
    this.api.getExpenses().subscribe((res)=>{
      console.log(res,"fetchexpenses")
      this.fetchexpenselist=res
      this.filterIncomesByMonth(this.selectedMonth); 
    })
  }
  filterIncomesByMonth(selectedMonth: any) {
    throw new Error('Method not implemented.');
  }
  createIncomeForm() {
    this.expenseForm = this.fb.group({
      month: ['', Validators.required],
      type: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }
  onChange(event: any) {
    this.selectedMonth = event.target.value.toLowerCase();
    this.monthSelected = true;
    this.totalExpenses = this.calculatetotalExpenses(this.selectedMonth);
    this.filteredExpenses = this.getExpensesForMonth(this.selectedMonth);
  }

  calculatetotalExpenses(month: string): number {
    let totalExpenses = 0;
    for (const income of this.getExpensesForMonth(month)) {
      totalExpenses += income.expenseAmount;
    }
    return totalExpenses;
  }

  getExpensesForMonth(month: string): any[] {
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
  //   this.getfilteredExpenses();
  // }
  // calculatetotalExpenses(month: string): number {
  //   let totalExpenses = 0;
  //   for (const income of this.getExpensesForMonth(month)) {
  //     totalExpenses += income.amount;
  //   }
  //   return totalExpenses;
  // }
  // getExpensesForMonth(month: string): any[] {
  //   switch (month) {
  //     case 'january':
  //       return this.januaryExpenses;
  //     case 'february':
  //       return this.februaryExpenses;
  //     case 'march':
  //       return this.marchExpenses;
  //     default:
  //       return [];
  //   }
  // }
  getFilteredExpenses() {
    let filteredExpenses: any[] = [];
    switch (this.selectedMonth) {
      case 'january':
        filteredExpenses = [...this.januaryExpenses];
        break;
      case 'february':
        filteredExpenses = [...this.februaryExpenses];
        break;
      case 'march':
        filteredExpenses = [...this.marchExpenses];
        break;
      default:
        break;
    }
  }
  onSubmit() {
    if (this.expenseForm.valid) {
      const newExpenses = this.expenseForm.value;
      this.api.postExpenses(newExpenses).subscribe((res) => {
        console.log('Expenses added successfully');

        switch (this.selectedMonth) {
          case 'january':
            this.januaryExpenses.push(newExpenses);
            break;
          case 'february':
            this.februaryExpenses.push(newExpenses);
            break;
          case 'march':
            this.marchExpenses.push(newExpenses);
            break;
          default:
            break;
        }
        this.fetchExpenses();
        this.expenseForm.reset();
        
        // this.expenseForm.patchValue({month:"",source:"",amount:"",investment:""})
      });
    }
  }
  // calculateTotalExpenses(month:string):number{
  //   return this.getFilteredExpenses().reduce((acc,curr)=>acc+curr.expenseAmount,0)
  // }
  onBack() {
    this.router.navigate(['/budget-plan/dashboard']);
  }
  saveForm() {
    console.log('Form Saves');
  }
}