import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InstitutesService } from 'src/app/all-services/institutes.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  loc: any;
  clg: any;
  college_data: any = [];
  college_flag: boolean = false;
  counter: any;
  comparecollege: any = [];
  compare_button_flag: boolean = false;
  router: any;
  uploadsUrl: any;
  

  constructor(private location : Location,
    private instituteService : InstitutesService,
    ){ 
      this.uploadsUrl = environment.uploadsUrl;
    }

  ngOnInit(): void {

    this.loc = this.location.getState();
    this.clg = this.loc.clg;

    if(this.clg !== undefined || this.clg !== null){

      this.instituteService.getAllInstitutes(this.clg).subscribe(data =>{
        console.log(data);
        this.college_data = data;
        this.counter = this.college_data.length;
  
        if(this.college_data.length === 0){
          this.college_flag = true;
        }
        else{
          this.college_flag = false;
        }
  
        console.log(this.college_flag)
        
        
      })
    }
  }

  toggle(event:any){
    console.log(event.source.value);

    // this.comparecollege = [];
    this.comparecollege.push(event.source.value);
    if( this.comparecollege.length > 0){
      this.compare_button_flag = false
    }

    if(this.comparecollege.length === 2){
      this.compare_button_flag = false
    }else{
      this.compare_button_flag = true

    }
  }

  removeCollege(event:any){
    const index: number = this.comparecollege.indexOf(event.source.value);
    this.comparecollege.splice(index,1);
    console.log(this.comparecollege)
    this.compare_button_flag = true

    if(this.comparecollege.length === 2){
      this.compare_button_flag = false
    }else{
      this.compare_button_flag = true

    }


  }

  compareColleges(){

    if(this.comparecollege.length === 2){
      this.compare_button_flag = false

      this.router.navigate(["/compare"], {state :{colleges : this.comparecollege}});
    }else{
      console.log("More than two college");
    }
  }

}
