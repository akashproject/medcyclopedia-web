import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { InstitutesService } from 'src/app/all-services/institutes.service';
@Component({
  selector: 'app-institute-details',
  templateUrl: './institute-details.component.html',
  styleUrls: ['./institute-details.component.scss']
})
export class InstituteDetailsComponent implements OnInit {

  pop:boolean = false;

  courses:boolean = false;
  noti:boolean = false;
  pgallery:boolean = false;
  data:any = [];

  constructor(private route: ActivatedRoute,private router:Router,private insService:InstitutesService) { }

  popOpen(){
    this.pop = true;
  }
  popClose(){
    this.pop = false;
  }

  courses_pop(){
    this.courses = true;
    this.noti = false;
    this.pgallery = false;
  }
  noti_pop(){
    this.courses = false;
    this.noti = true;
    this.pgallery = false;
  }
  pgallery_pop(){
    this.courses = false;
    this.noti = false;
    this.pgallery = true;
  }

  ngOnInit() {
    let ins_id = this.route.snapshot.paramMap.get('id');
    this.insService.getInstitute(ins_id).subscribe(res=>{
      this.data = res
      console.log(res)
    })
  }

}
