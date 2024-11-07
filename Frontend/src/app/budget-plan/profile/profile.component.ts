import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
profileForm!:FormGroup;
constructor(private fb:FormBuilder){}
ngOnInit(): void {
    this.createProfileForm();
}
createProfileForm(){
  this.profileForm=this.fb.group({
    name:['',Validators.required],
    age:['',Validators.required],
    dob:['',Validators.required],
    gender:['',Validators.required],
    occupation:['',Validators.required],
    email:['',Validators.required],
    address:['',Validators.required],
    contact:['',Validators.required]
  })
  console.log(this.profileForm,"profileform")
}
onSubmit(){
  if(this.profileForm.valid){
    console.log(this.profileForm.value);
    
  }else{
    alert('please fill all fields')
  }
}
}
