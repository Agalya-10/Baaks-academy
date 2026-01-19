import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-studentsidebar',
  templateUrl: './studentsidebar.component.html',
  styleUrls: ['./studentsidebar.component.css']
})
export class StudentsidebarComponent {
  constructor(private router:Router){}
  logout()
  {
    console.log("Logout successfully")
    this.router.navigate(['/signin'])
  }

}
