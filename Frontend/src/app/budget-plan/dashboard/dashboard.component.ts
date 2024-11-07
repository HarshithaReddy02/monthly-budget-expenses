import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
lastMonthIncome=['january : $1000','february : $1500','march : $2000']
currentMonthIncome= '$2500'
lastMonthExpence=['january : $800','february : $1000','march : $1300']
currentExpence= '$1500'
todoTRansactions=[
  {description:'Pay electricity bill'},
  {description:'Submit monthly report'},
  {description:'Buy Grovceries'},
  {description:'Call Insurance Company'}

]
totalCurrentMonthIncome=2000;
totalCurrentMonthExpense=1500;
constructor(private router:Router){

}
onIncome(){
  this.router.navigate(['/budget-plan/income'])
}
onExpense(){
  this.router.navigate(['/budget-plan/expenses'])

}
onTodo(){
  this.router.navigate(['/budget-plan/todo'])

}
get currentMonthSavings():number{
  return this.totalCurrentMonthIncome=this.totalCurrentMonthExpense
}
}
