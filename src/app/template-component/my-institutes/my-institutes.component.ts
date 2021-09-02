import { Component, OnInit } from '@angular/core';
import { InstitutesService } from 'src/app/all-services/institutes.service';
import { SigninService } from 'src/app/all-services/signin.service';

@Component({
  selector: 'app-my-institutes',
  templateUrl: './my-institutes.component.html',
  styleUrls: ['./my-institutes.component.scss']
})
export class MyInstitutesComponent implements OnInit {

  token_data : any = [];
  user_data : any =[];
  user_id: any;
  my_inst: any = [];
  upFlag: boolean = false;
  
  constructor(private signinservice: SigninService,
    private institutionService : InstitutesService ) { }

  ngOnInit(): void {

    this.token_data = this.signinservice.getCurrentUser();

    if(this.token_data !== null){
      this.signinservice.getUserData(this.token_data.access_token).subscribe(data =>{
        console.log(data);
        this.user_data = data;
        this.user_id = this.user_data.id;

        this.institutionService.getMyInstitutions(this.user_id).subscribe(res1 => {
          console.log(res1);
          this.my_inst = res1;
          if(this.my_inst.length === 0){
            this.upFlag = true;
          }
        })
      })
    }
  }

}
