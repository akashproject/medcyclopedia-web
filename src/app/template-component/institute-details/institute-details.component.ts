import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/all-services/courses.service';
import { InstitutesService } from 'src/app/all-services/institutes.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-institute-details',
  templateUrl: './institute-details.component.html',
  styleUrls: ['./institute-details.component.scss']
})
export class InstituteDetailsComponent implements OnInit {

  pop: boolean = false;

  courses: boolean = false;
  noti: boolean = false;
  pgallery: boolean = false;
  data: any = [];
  uploadsUrl: any;
  institute_courses: any = [];

  constructor(private route: ActivatedRoute, private router: Router, private insService: InstitutesService,
    private courseService: CoursesService
  ) {
    this.uploadsUrl = environment.uploadsUrl;

  }

  popOpen() {
    this.pop = true;
  }
  popClose() {
    this.pop = false;
  }

  courses_pop(id: any) {
    this.courses = true;
    this.noti = false;
    this.pgallery = false;
    this.courseService.getInstituteCourses(id).subscribe(data => {
      console.log(data);
      this.institute_courses = data;

    });


  }
  noti_pop() {
    this.courses = false;
    this.noti = true;
    this.pgallery = false;
  }
  pgallery_pop() {
    this.courses = false;
    this.noti = false;
    this.pgallery = true;
  }

  ngOnInit() {
    let ins_id = this.route.snapshot.paramMap.get('id');
    this.insService.getInstitute(ins_id).subscribe(res => {
      this.data = res
      console.log(res)
    })
  }

  downloadMyFile(download_url: any) {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.uploadsUrl+"/"+download_url);
    link.setAttribute('download', `brochure.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }


}
