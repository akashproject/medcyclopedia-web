import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/all-services/signin.service';
import { SnackbarService } from 'src/app/all-services/snackbar.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {

  mobile : string = "";
  otp_value : any;
  

  constructor(
    private signinservice : SigninService,
    private snackbarservice : SnackbarService,
    private router : Router ) { }

  ngOnInit(): void {}

  getOtp(){

    if(this.mobile.toString().match("[0-9]{10}") && this.mobile.toString().length === 10){ 
      try{
        this.signinservice.sendotp(this.mobile).subscribe(data =>{
          console.log(data);
          this.otp_value = data
          this.router.navigate(['/confirm-user'], {state : {otp : this.otp_value.otp_value, mobile : this.mobile}});
        })
        
      }catch(err){
        console.log(err);
      }
    }else{
      this.snackbarservice.openSnackBarWithTime("Mobile is not valid", 'close');
    }

    
  }

}
