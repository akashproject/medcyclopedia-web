import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/all-services/signin.service';
import { SnackbarService } from 'src/app/all-services/snackbar.service';
import { SpinnerService } from 'src/app/all-services/spinner.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {

  menu: boolean = false;
  token_data: any = [];
  token: string = "";
  user_data: any = [];
  first_name: string = "";
  full_name: string = "";
  // showSpinner: boolean = false;

  constructor(private signinservice: SigninService,
    private snackbarservice: SnackbarService,
    private router: Router,
    public spinnerservice: SpinnerService
    ) { }

  menuopen() {
    this.menu = !this.menu;
  }
  menuclose() {
    this.menu = false;
  }

  ngOnInit(): void {

    
    // this.showSpinner = true;
    this.token_data = this.signinservice.getCurrentUser();

    console.log(this.token_data);

    // console.log(this.token_data);

    if (this.token_data !== null) {
      this.token = this.token_data.access_token;



      this.signinservice.getUserData(this.token).subscribe((res: any) => {

        console.log(res);
        // this.showSpinner = false;

        this.user_data = res;

        if (JSON.stringify(this.user_data) === '{}') {
          this.signinservice.logout();
          this.router.navigate(['/login']);
        }

        if (this.user_data) {
          this.full_name = this.user_data.name;

          if (this.full_name !== undefined) {
            this.first_name = this.full_name.split(" ")[0];

          }
        }

      }, (err: any) => {
        console.log(err);
        this.router.navigate(['/login']);
      });
    } else{
      this.router.navigate(['/login']);
    }



  }

  logout() {
    this.signinservice.logout();
    this.router.navigate(['/login']);
  }

}
