import { Component, OnInit } from '@angular/core';
//import { SocialAuthService, GoogleLoginProvider, SocialUser,FacebookLoginProvider } from 'angularx-social-login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //socialUser: SocialUser | undefined;
  isLoggedin: boolean | undefined;

  constructor(private formBuilder: FormBuilder,
    // private socialAuthService: SocialAuthService
    ) { }

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



  }


