import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/all-services/courses.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fyc',
  templateUrl: './fyc.component.html',
  styleUrls: ['./fyc.component.scss']
})
export class FycComponent implements OnInit {

  courses:any;
  uploadsUrl: any;


  constructor(private courseService:CoursesService) { 
    this.uploadsUrl = environment.uploadsUrl;

  }

  ngOnInit(): void {

    this.courseService.getCourses().subscribe(res=>{
       this.courses = res
       console.log(this.courses)
    })

  }

}
