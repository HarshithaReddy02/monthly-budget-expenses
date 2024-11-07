import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import {MatSnackBar} from '@angular/material/snack-bar'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  activeForm:'login'|'register'='login'
  constructor(private fb: FormBuilder,private router:Router) {}
  ngOnInit(): void {
  this.createLogin();
  this.createRegister();
  }
  toggleForm(form:'login' |'register'){
    this.activeForm=form;
  }
  createLogin(){
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
    console.log(this.loginForm, 'login');
    
  }
  createRegister(){
    this.registerForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
    console.log(this.registerForm, 'register');
  }
  login(){
    const loginObj={
      email:this.loginForm.value?.email,
      password:this.loginForm.value?.password
    }
    console.log(loginObj)
    this.router.navigate(['budget-plan/dashboard'])

  }
  register(){
    const registerObj={
      userName:this.registerForm.value?.userName,
      email:this.registerForm.value?.email,
      password:this.registerForm.value?.password
    }
    console.log(registerObj)
    
  }
}
