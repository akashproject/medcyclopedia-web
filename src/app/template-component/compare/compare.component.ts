import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/all-services/courses.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  loc: any;
  comparecollege: any = [];
  college1: any
  college2: any;
  institute_courses1: any = [];
  institute_courses2: any = [];

  constructor(private location: Location, private courseService : CoursesService) {
  
    // this.loc = this.location.getState();
    // this.comparecollege = this.loc.colleges;
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }


  ngOnInit(): void {

    this.loc = this.location.getState();
    this.comparecollege = this.loc.colleges;
    console.log(this.comparecollege);
    if(this.comparecollege !== undefined){
      this.college1 = this.comparecollege[0];
      this.college2 = this.comparecollege[1];
      
    }

    // this.courseService.getInstituteCourses(this.college1.id).subscribe(data => {
    //   console.log(data);
    //   this.institute_courses1 = data;

    //   this.courseService.getInstituteCourses(this.college2.id).subscribe(data => {
    //     console.log(data);
    //     this.institute_courses2 = data;
  
    //   });
    // });
    
    
  }

}
