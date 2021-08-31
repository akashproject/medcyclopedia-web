import { Location } from '@angular/common';
import { Input } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/all-services/signin.service';
import { SnackbarService } from 'src/app/all-services/snackbar.service';

@Component({
  selector: 'app-confirm-user',
  templateUrl: './confirm-user.component.html',
  styleUrls: ['./confirm-user.component.scss']
})
export class ConfirmUserComponent implements OnInit {

  loc : any = [];
  name: string = "";
  email: string = "";
  password: string = "";
  mobile: string = "";
  referral: string = "";

  @ViewChild("otp1")  otp1: ElementRef<HTMLInputElement> | undefined ;
  @ViewChild("otp2") private otp2: ElementRef | undefined;
  @ViewChild("otp3") private otp3: ElementRef | undefined;
  @ViewChild("otp4") private otp4: ElementRef | undefined;
  @ViewChild("otp5") private otp5: ElementRef | undefined;
  @ViewChild("otp6") private otp6: ElementRef | undefined;
  place1: string = "";
  place2: string = "";
  place3: string = "";
  place4: string = "";
  place5: string = "";
  place6: string = "";
  full_otp : string = "";
  otp_object : any =[];
  otp_received : string = "";
  token_data: any =[];
  error: any = [];



  otpForm  = this.fb.group({
    place1: ['', Validators.required],
    place2: ['', Validators.required],
    place3: ['', Validators.required],
    place4: ['', Validators.required],
    place5: ['', Validators.required],
    place6: ['', Validators.required]
  });
  

  
  constructor(private location : Location,
    private fb : FormBuilder,
    private signinservice : SigninService,
    private snackbarservice : SnackbarService,
    private router : Router) { }

  ngOnInit(): void {




    this.loc = this.location.getState();

    this.name = this.loc.name;
    this.email = this.loc.email;
    this.password = this.loc.password;
    this.mobile = this.loc.mobile;
    this.referral = this.loc.referral;

    console.log(this.name+" "+this.email+" "+this.password+" "+this.mobile+" "+this.referral);

    if(this.mobile !== null || this.mobile !== undefined){
      this.signinservice.sendotp(this.mobile).subscribe((res) =>{
        console.log(res);
        // this.loaderservice.hideLoading();
        this.otp_object = res;
        this.otp_received = this.otp_object.otp_value;
        console.log(this.otp_received);
      });
    }

    


  }

  register(){

    this.full_otp = this.otpForm.value.place1+this.otpForm.value.place2+this.otpForm.value.place3+this.otpForm.value.place4+this.otpForm.value.place5+this.otpForm.value.place6;
    console.log(typeof(Number.parseInt(this.full_otp)) +" "+this.full_otp);
    console.log(typeof(this.otp_received) +" "+this.otp_received);

    if(!( this.otp_received == this.full_otp)){

      // this.displayToast2();
      this.snackbarservice.openSnackBarWithTime('Otp did not match', 'close')
    }else {
      console.log(this.name+" "+this.email+" "+this.password+" "+this.mobile+" "+this.referral);
  
      this.signinservice.registerUser(this.name, this.mobile, this.password, this.email).subscribe(res => {
        console.log(res);
        this.token_data = res;  
        this.router.navigate(['/home']);
      },
        (err : any) => {
          err = err
          console.log(err);
          this.error = err;
          console.log(this.error.error);
          console.log(this.error.error.error);
  
          var abc: string = this.error.error.error;
          if (abc.endsWith("'users_email_unique'")) {
            // this.displayToast1();
            this.snackbarservice.openSnackBarWithTime('This email is already been used', 'close');
            this.router.navigate(['/sign-up']);

  
          }
          else if(abc.endsWith("'users_mobile_unique'")){
            // this.displayToast3();
            this.snackbarservice.openSnackBarWithTime('This mobile is already been used', 'close');
            this.router.navigate(['/sign-up']);


          }
          else {
            // this.displayToast();Registration is not done.
            // this.place1, this.place2, this.place3, this.place4, this.place5, this.place6 = "";

            this.snackbarservice.openSnackBarWithTime('Registration is not done', 'close');
            this.otpForm.patchValue({ place1 : "",place2 : "",place3 : "",place4 : "",place5 : "",place6 : "" })


          }
  
        });
      }

  }

  gotoNextField(next : any) {
    // console.log(this.one);
    next.focus();
  }

}
