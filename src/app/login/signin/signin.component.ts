import { Component } from '@angular/core';
 import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private router:Router){}
  signup()
  {
    console.log("ff")
    this.router.navigate(['/signup'])
  }
}
