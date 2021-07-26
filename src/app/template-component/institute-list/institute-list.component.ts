import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { InstitutesService } from 'src/app/all-services/institutes.service';

@Component({
  selector: 'app-institute-list',
  templateUrl: './institute-list.component.html',
  styleUrls: ['./institute-list.component.scss']
})
export class InstituteListComponent implements OnInit {

  instritutes:any;
  counter=0;
  pagecount=0;

  constructor(private route: ActivatedRoute,private router:Router,private insService:InstitutesService) { }

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

}
