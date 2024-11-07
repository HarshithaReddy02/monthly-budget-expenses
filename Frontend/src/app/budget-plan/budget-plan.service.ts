import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetPlanService {

  constructor(private http: HttpClient) { }


  postIncome(data: any): Observable<any> {

    return this.http.post("http://localhost:8000/api/income", data);
  }
  getIncome(){
    return this.http.get("http://localhost:8000/api/income")
  }
  postExpenses(data: any): Observable<any> {

    return this.http.post("http://localhost:8000/api/expenses", data);
  }
  getExpenses(){
    return this.http.get("http://localhost:8000/api/expenses")
  }
}
