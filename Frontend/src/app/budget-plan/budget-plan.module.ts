import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetPlanRoutingModule } from './budget-plan-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { TodoTransactionsComponent } from './todo-transactions/todo-transactions.component';
import { HistoryComponent } from './history/history.component';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { BudgetPlanService } from './budget-plan.service';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    LoginComponent,
    SideNavComponent,
    DashboardComponent,
    IncomeComponent,
    ExpensesComponent,
    TodoTransactionsComponent,
    HistoryComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BudgetPlanRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers:[
    BudgetPlanService
  ]

})
export class BudgetPlanModule { }
