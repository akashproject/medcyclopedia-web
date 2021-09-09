import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser,FacebookLoginProvider } from 'angularx-social-login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from '../../all-services/signin.service';
import { SnackbarService } from '../../all-services/snackbar.service';

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
  access_token: any = "";
  token: string | undefined;


  socialUser: SocialUser | undefined;
  isLoggedin: boolean | undefined;
  socialUser_detail : any ;
  socialmedia_flag: any;


  constructor(private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
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

    this.access_token = this.signinservice.getCurrentUser();

    console.log(this.access_token);

    this.socialmedia_flag = this.signinservice.getFlag("login");

    console.log(this.socialmedia_flag);

    if(this.socialmedia_flag === "google"){

      this.socialAuthService.authState.subscribe((user) => {
        this.socialUser = user;
        this.isLoggedin = (user != null);
        console.log("i am socialUser",this.socialUser);
        this.socialUser_detail = this.socialUser;
      });

    } else if(this.socialmedia_flag === "facebook"){

      //facebook login
      
    } else if(this.socialmedia_flag === null){
      if (this.access_token !== null) {
        console.log("not a social media login");
        this.signinservice.getUserData(this.access_token.access_token).subscribe((res: any) => { 
          console.log(res);
          this.token_data = res; 
          if (JSON.stringify(this.token_data) !== '{}') {
            this.router.navigate(['/home']); 
          } else {
            this.signinservice.logout();
          }
        }, (err: any) => {
          console.log(err);
          this.snackmatservice.openSnackBarWithTime('Please login', 'close');
        });
      }
    }
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
        d => this.signinservice.loginByGoogle(d).subscribe(((data:any) =>{
          this.signinservice.setToken(d.authToken);
          this.signinservice.setFlag("login","google");
          this.router.navigate(['/home']); 
        }))
    ).catch(error => {
      console.log(error);
    });;
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(d => console.log(d)).catch(error => {
      console.log(error);
    });
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

    }, (err: any) => {
      // err = err
      console.log(err);
      // this.displayToastFailure();
      this.snackmatservice.openSnackBarWithTime("Mobile or password is incorrect!", 'close');
    });

  }

  get errorControl(): any {
    if (this.signinForm !== undefined) {
      return this.signinForm.controls;

    }
  }

  



}


