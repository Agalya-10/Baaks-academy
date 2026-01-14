import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form !:FormGroup;
  roles = ['Admin', 'User', 'Manager'];

  constructor(private fb:FormBuilder){}
  ngOnInit(){
    this.validation();
  }
  validation(){
    this.form=this.fb.group({
      "Email":[null,(Validators.required)],
      "Password":[null,(Validators.required)],
      "Roles":[null,(Validators.required)]
    })
  }
  onSubmit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
  }

}
