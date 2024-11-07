import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BudgetPlanService } from '../budget-plan.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
})
export class IncomeComponent implements OnInit {
  incomeForm!: FormGroup;
  fetchIncomes:any;
  totalIncome: number = 0;
  filteredIncomes: any[] = [];
  selectedMonth: any;
  januaryIncomes: any[] = [
    { source: 'Salary', amount: 5000, investment: '401(k)' },
    { source: 'Freelancing', amount: 1000, investment: 'Stocks' },
  ];
  februaryIncomes: any[] = [
    { source: 'Salary', amount: 5500, investment: '401(k)' },
    { source: 'Rental Income', amount: 700, investment: 'Real Estate' },
  ];
  marchIncomes: any[] = [
    { source: 'Salary', amount: 5200, investment: '401(k)' },
    { source: 'Freelancing', amount: 1200, investment: 'Stocks' },
    { source: 'Rental Income', amount: 600, investment: 'Real Estate' },
  ];
  monthSelected: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: BudgetPlanService
  ) {
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleString('default', {
      month: 'long',
    });
  }
  ngOnInit(): void {
    this.createIncomeForm();
    this.getIncomeData();
  }
  createIncomeForm() {
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      amount: ['', Validators.required],
      source: ['', Validators.required],
      investment: ['', Validators.required],
    });
  }
  onChange(event: any) {
    this.selectedMonth = event.target.value.toLowerCase();
    this.monthSelected = true;
    this.totalIncome = this.calculateTotalIncome(this.selectedMonth);
    this.filteredIncomes = this.getIncomesForMonth(this.selectedMonth);
  }

  calculateTotalIncome(month: string): number {
    let totalIncome = 0;
    for (const income of this.getIncomesForMonth(month)) {
      totalIncome += income.amount;
    }
    return totalIncome;
  }

  getIncomesForMonth(month: string): any[] {
    switch (month) {
      case 'january':
        return this.januaryIncomes;
      case 'february':
        return this.februaryIncomes;
      case 'march':
        return this.marchIncomes;
      default:
        return [];
    }
  }

  getFilteredIncomes() {
    let filteredIncomes: any[] = [];
    switch (this.selectedMonth) {
      case 'january':
        filteredIncomes = [...this.januaryIncomes];
        break;
      case 'february':
        filteredIncomes = [...this.februaryIncomes];
        break;
      case 'march':
        filteredIncomes = [...this.marchIncomes];
        break;
      default:
        break;
    }
  }
  getIncomeData(){
    this.api.getIncome().subscribe((res)=>{

      console.log(res,"getres")
      this.fetchIncomes=res;
      this.filterIncomesByMonth(this.selectedMonth); // Display current month's data by default

    })
  }
  // onChange(event: any) {
  //   this.selectedMonth = event.target.value;
  //   this.filterIncomesByMonth(this.selectedMonth);
  // }
  filterIncomesByMonth(selectedMonth: any) {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
    if (this.incomeForm.valid) {
      const newIncome = this.incomeForm.value;
      this.api.postIncome(newIncome).subscribe(
        (res) => {
          console.log('Income added successfully', res);

          switch (this.selectedMonth) {
            case 'january':
              this.januaryIncomes.push(newIncome);
              break;
            case 'february':
              this.februaryIncomes.push(newIncome);
              break;
            case 'march':
              this.marchIncomes.push(newIncome);
              break;
            default:
              break;
          }
          this.incomeForm.reset();
          this.incomeForm.patchValue({
            month: '',
            source: '',
            amount: '',
            investment: '',
          });
        },
        (error) => {
          console.log('error handling income', error);
        }
      );
    }
  }
  onBack() {
    this.router.navigate(['/budget-plan/dashboard']);
  }
  saveForm() {
    console.log('Form Saves');
  }
}
