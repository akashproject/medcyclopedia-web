import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { SocialAuthService, GoogleLoginProvider, SocialUser,FacebookLoginProvider } from 'angularx-social-login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/all-services/signin.service';
import { ToastrService } from 'ngx-toastr';
import { SnackbarService } from 'src/app/all-services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  phone: string = "";
  password: string = "";
  token_data: any;
  token: string | undefined;
  //socialUser: SocialUser | undefined;
  isLoggedin: boolean | undefined;

  constructor(private formBuilder: FormBuilder,
    // private socialAuthService: SocialAuthService,
    private signinservice: SigninService,
    private router: Router,
    private snackmatservice: SnackbarService
  ) {
    this.signinForm = this.formBuilder.group({
      phone: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {



    // this.socialAuthService.authState.subscribe((user) => {
    //   this.socialUser = user;
    //   this.isLoggedin = (user != null);
    //   console.log(this.socialUser);
    // });
  }

  loginWithGoogle(): void {
    //this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    //this.socialAuthService.signOut();
  }

  loginWithFacebook(): void {
    //this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  login() {
    console.log(this.phone);
    console.log(this.password);

    this.signinservice.signinUser(this.phone, this.password).subscribe(data => {
      console.log(data);
      this.signinservice.setToken(data);
      this.token_data = data;
      this.token = this.token_data.access_token;
      console.log(this.token);

      this.router.navigate(['/home']);

    },(err : any) => {
      // err = err
      console.log(err);
      // this.displayToastFailure();
      this.snackmatservice.openSnackBarWithTime("Mobile or password is incorrect!", 'close');
    });
    
  }

  

}


