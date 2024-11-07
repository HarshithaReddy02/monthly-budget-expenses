import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  constructor(private router:Router){}
isSlideOut=true;
toggleSlideOut():void{
  this.isSlideOut=!this.isSlideOut
}
onDash(){
  this.router.navigate(['/budget-plan/dashboard'])
}
onProfile(){
  this.router.navigate(['/budget-plan/profile'])
}
onPrevHistory(){
  this.router.navigate(['/budget-plan/history'])
}
onLogOut(){
  this.router.navigate(['/budget-plan/login'])
}

}
