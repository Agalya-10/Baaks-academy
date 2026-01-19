import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form !: FormGroup;
  roles = ['Admin', 'Student', 'Teacher'];

  constructor(private fb: FormBuilder,private router: Router) { }
  ngOnInit() {
    this.validation();
  }
  validation() {
    this.form = this.fb.group({
      "Email": [null, (Validators.required)],
      "Password": [null, (Validators.required)],
      "Role": [null, (Validators.required)],
      "Repassword":[null,(Validators.required)]

    })
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;

    }
    if(this.form.get('Role')?.value==='Admin'){
      this.router.navigate(['/admin']);
    }
    else if(this.form.get('Role')?.value==='Student'){
      this.router.navigate(['/student']);
    }
    else if(this.form.get('Role')?.value==='Teacher')
    {
      this.router.navigate(['/teacher'])
    }
  }

  signin(){
    this.router.navigate([''])
}}
