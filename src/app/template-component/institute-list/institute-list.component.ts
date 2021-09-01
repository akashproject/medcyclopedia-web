import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { InstitutesService } from 'src/app/all-services/institutes.service';
import { SigninService } from 'src/app/all-services/signin.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-institute-list',
  templateUrl: './institute-list.component.html',
  styleUrls: ['./institute-list.component.scss']
})
export class InstituteListComponent implements OnInit {

  instritutes:any;
  counter=0;
  pagecount=0;
  uploadsUrl: any;
  institute_id : any;
  token_data: any = [];
  access_token : any;
  user_detail : any =[];
  user_id : any;

  constructor(private route: ActivatedRoute,private router:Router,private insService:InstitutesService, private siginservice : SigninService) {
    this.uploadsUrl = environment.uploadsUrl;

   }

  ngOnInit(): void {
    let course_id = this.route.snapshot.paramMap.get('cid');
    let ownership_type = this.route.snapshot.paramMap.get('id');
    let state_id = this.route.snapshot.paramMap.get('lid');

    this.insService.getInstitutes(state_id,course_id,ownership_type).subscribe(res=>{

      this.instritutes = res;
      this.counter = this.instritutes.length
      this.pagecount = this.counter/1;
      console.log(this.instritutes)
    })


  }

  viewMore(institute:any){
    this.institute_id = institute.id;

    this.token_data = this.siginservice.getCurrentUser();

    
    if(this.token_data !== null){
      this.siginservice.getUserData(this.token_data.access_token).subscribe((res1:any) =>{
        console.log(res1);
        this.user_detail = res1;
        this.user_id = this.user_detail.id;

        this.insService.addMyInstitute(this.user_id, this.institute_id).subscribe(data =>{
          console.log(data);
    
          this.router.navigate(['/fyc/fyi/institute-list/institute-details/'+this.institute_id]);
        })
      })
    }

    
  }

}
