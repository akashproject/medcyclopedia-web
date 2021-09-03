import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/all-services/signin.service';
import { SnackbarService } from 'src/app/all-services/snackbar.service';
import { StatesService } from 'src/app/all-services/states.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  pro_content: boolean = true;
  pro_content_edit: boolean = false;
  save_buttons: boolean = false;
  edit_button: boolean = true;
  pop: boolean = false;
  uploadsUrl : any;
  token_data: any = [];
  user_data: any = [];
  token: string = "";
  states: any = [];
  files: any = "assets/images/empty-avatar.png";
  //user data
  name: string = "";
  first_name: string = "";
  last_name: string = "";
  mobile: string = "";
  home_state: string = "";
  gender: string = "";
  cast: string = "";
  city: string = "";
  physical_status: string = "";
  email: string = "";
  score: string = "";
  profileimage: string = "";
  constructor(private signinservice: SigninService,
    private stateservice: StatesService,
    private snackbarservice: SnackbarService,
    private router: Router) {
      this.uploadsUrl = environment.uploadsUrl;
  }

  edit_content() {
    this.pro_content = false;
    this.pro_content_edit = true;
    this.save_buttons = true;
    this.edit_button = false;
  }
  save_content() {
    this.pro_content = true;
    this.pro_content_edit = false;
    this.save_buttons = false;
    this.edit_button = true;
  }
  cancle_content() {
    this.pro_content = true;
    this.pro_content_edit = false;
    this.save_buttons = false;
    this.edit_button = true;
  }

  upload_photo() {
    this.pop = true;
  }
  popClose() {
    this.pop = false;
  }

  add_photo() {
    if (this.files) {
      //this.spinner.show();
      this.signinservice.uploadPhofilephoto(this.token,this.files).subscribe((data: any) => {
        //this.spinner.hide();
        if (data && data.status === 200 && data.data) {
          //this.logo = data.data;
        }
      }, (err: any) => {
        console.log(err);
       // this.spinner.hide();
      });
    } else {
      console.log('no');
    }
    this.pop = false;
  }
  cancle_photo() {
    this.pop = false;
  }

  preview_profile(event : any) {
    this.files = event.target.files;
    const file = event.target.files[0];
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed      
      this.files = event.target?.result;
    }
  }

  ngOnInit(): void {

    this.token_data = this.signinservice.getCurrentUser();

    console.log(this.token_data);

    if (this.token_data !== null) {
      this.token = this.token_data.access_token;



      // this.token = this.token_data.access_token;

      this.signinservice.getUserData(this.token).subscribe((res: any) => {


        console.log(res);
        this.user_data = res;

        if (JSON.stringify(this.user_data) === '{}') {
          this.signinservice.logout();
          this.router.navigate(['/login']);
        }

        this.name = this.user_data.name;

        if (this.user_data) {
          if (this.name !== undefined) {
            this.first_name = this.name.split(" ")[0];
            this.last_name = this.name.split(" ")[1];
          }


          this.mobile = this.user_data.mobile;
          this.home_state = this.user_data.state;
          this.city = this.user_data.city;
          this.gender = this.user_data.gender;
          this.cast = this.user_data.cast;
          this.physical_status = this.user_data.physical_status;
          this.email = this.user_data.email;
          this.score = this.user_data.score;
          this.profileimage = this.user_data.profile_image;
        }

      }, (err: any) => {
        console.log(err);

        this.snackbarservice.openSnackBarWithTime('Profile loading error', 'close');
      })

      this.stateservice.getStates().subscribe((data: any) => {
        console.log(data);
        this.states = data;

      })
    }

  }

  stateSelection(event: any) {
    console.log(event);
  }

  save() {

    console.log(this.home_state);
    console.log(this.name + " " + this.mobile + " " + this.home_state + " " + this.gender + " " + this.cast + " " + this.city + " " + this.physical_status + " " + this.email + " " + this.score + " " + this.token);


    this.name = this.first_name + " " + this.last_name;
    // this.loaderservice.presentLoading();
    this.signinservice.updateUser(this.name, this.mobile, this.home_state, this.gender, this.cast, this.city, this.physical_status, this.email, this.score, this.token).subscribe(res => {
      console.log(res);

      // this.loaderservice.hideLoading();
      // this.displayToast();
      // this.editProButton();
      this.snackbarservice.openSnackBarWithTime('Profile saved', 'close')
      this.save_content();

    },
      err => {
        err = err
        console.log(err);
        this.snackbarservice.openSnackBarWithTime('Profile not saved', 'close')
      });


  }

}