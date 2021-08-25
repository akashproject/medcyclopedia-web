import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/all-services/courses.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-find-exam',
  templateUrl: './find-exam.component.html',
  styleUrls: ['./find-exam.component.scss']
})
export class FindExamComponent implements OnInit {
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
