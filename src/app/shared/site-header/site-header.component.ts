import { Component, OnInit } from '@angular/core';
import { SigninService } from 'src/app/all-services/signin.service';
import { SnackbarService } from 'src/app/all-services/snackbar.service';

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
  first_name : string ="";
  full_name : string ="";
  constructor(private signinservice : SigninService,
    private snackbarservice :SnackbarService) { }
  
  menuopen(){
    this.menu = !this.menu;
  }
  menuclose(){
    this.menu = false;
  }

  ngOnInit(): void {

    this.token_data = this.signinservice.getCurrentUser();

    console.log(this.token_data);

    this.token = this.token_data.access_token;

    this.signinservice.getUserData(this.token).subscribe((res: any) => {

      console.log(res);
      
      this.user_data = res;
      if(this.user_data){
        this.full_name = this.user_data.name;
        this.first_name = this.full_name.split(" ")[0];
        this.snackbarservice.openSnackBarWithTime('Profile is logged in','close')
      }

    });
  }

}
