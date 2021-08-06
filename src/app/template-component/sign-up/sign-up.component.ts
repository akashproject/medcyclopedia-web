import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  // signupForm: FormGroup | undefined;

  first_name: string = "";
  last_name: string = "";
  email: string = "";
  password: string = "";
  mobile: string = "";
  cpassword: string = "";
  referral: string = "";

  signupForm = this.fb.group({
    first_name: ['', [Validators.required, Validators.minLength(2)]],
    last_name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', Validators.required],
    password: ['', Validators.required],
    mobile: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
    cpassword: ['', [Validators.required]],
    referral: ['']
  });

  name: string = "";

  constructor(private fb: FormBuilder, private router : Router) { }

  ngOnInit(): void {

    
  }

  get errorControl(): any {
    if (this.signupForm !== undefined) {
      return this.signupForm.controls;

    }
  }

  match = false;
  confirmPassword(): any {

    if (this.signupForm !== undefined) {

      if (this.signupForm.value.password === this.signupForm.value.cpassword) {

        this.match = true;
        return false;
      }
      return true;
    }
  }

  sendotp() : any {
    // routerLink="/confirm-user"
    console.log(this.first_name+" "+this.last_name+" "+this.email+" "+this.password+" "+this.cpassword+" "+this.mobile+" "+this.referral);
    this.name = this.signupForm.value.first_name + " " + this.signupForm.value.last_name;
    console.log(this.name);

    // this.otp.sendotp(this.userDetails.getMobile());


    this.router.navigate(['/confirm-user'], { state: { name:this.name, email:this.email, password:this.password, mobile:this.mobile, referral:this.referral }});
  }


}
