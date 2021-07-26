import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/all-services/courses.service';

@Component({
  selector: 'app-fyc',
  templateUrl: './fyc.component.html',
  styleUrls: ['./fyc.component.scss']
})
export class FycComponent implements OnInit {

  courses:any;

  constructor(private courseService:CoursesService) { }

  ngOnInit(): void {

    this.courseService.getCourses().subscribe(res=>{
       this.courses = res
       console.log(this.courses)
    })

  }

}
