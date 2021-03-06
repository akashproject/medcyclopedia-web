import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/all-services/courses.service';
import { InstitutesService } from 'src/app/all-services/institutes.service';
import { SigninService } from 'src/app/all-services/signin.service';
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
  token_detail : any;
  user_detail: any = [];
  user_id: any;
  like : any;
  institute_id: any;
  ins_notifications: any = [];
  upFlag: boolean = false;
  ins_photos: any;
  like_counter : any;
  upFlag_photo : boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private insService: InstitutesService,
    private courseService: CoursesService,
    private signinservice : SigninService
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
      if(this.institute_courses.length === 0) {
        this.upFlag = true;
      }

    });


  }
  noti_pop(id:any) {
    this.courses = false;
    this.noti = true;
    this.pgallery = false;
    this.insService.getInstituteNotification(id).subscribe(data =>{
      console.log(data);
      this.ins_notifications = data;
      if(this.ins_notifications.length === 0){
        this.upFlag = true;
      }
    })
  }
  pgallery_pop(id:any) {
    this.courses = false;
    this.noti = false;
    this.pgallery = true;
    this.insService.getInstituteGallery(id).subscribe(data =>{
      console.log(data);
      this.ins_photos = data;
      if(this.ins_photos.length === 0){
        this.upFlag_photo = true;
      }
    })
  }

  ngOnInit() {
    let ins_id = this.route.snapshot.paramMap.get('id');
    this.institute_id = ins_id;
    this.insService.getInstitute(ins_id).subscribe(res => {
      this.data = res
      this.like_counter = this.data.likecount;
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

  likeInstitute(){

    this.token_detail = this.signinservice.getCurrentUser();
    if(this.token_detail !== null){
      this.signinservice.getUserData(this.token_detail.access_token).subscribe(res =>{
        this.user_detail = res;
        this.user_id = this.user_detail.id;

        this.insService.getLikedInstitute(this.user_id, this.institute_id).subscribe((data:any) =>{
          console.log(data);
          this.like_counter = this.like_counter+1;
          this.like = true;
        })
        
      })
    }
    
  }


}
