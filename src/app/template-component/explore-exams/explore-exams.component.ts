import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ExploreExamService } from 'src/app/all-services/explore-exam.service';
import { SnackbarService } from 'src/app/all-services/snackbar.service';
@Component({
  selector: 'app-explore-exams',
  templateUrl: './explore-exams.component.html',
  styleUrls: ['./explore-exams.component.scss']
})
export class ExploreExamsComponent implements OnInit {

  exams:any;

  constructor(private route: ActivatedRoute,private router:Router,private exploreexams:ExploreExamService,
    private snackbar:SnackbarService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    if(id === null){
      this.snackbar.openSnackBarWithTime('Choose the course again', 'close');
    }else{
      this.exploreexams.getExams(id).subscribe(res=>{
        this.exams = res;
        console.log(this.exams)
      })
    }
    
  }

}
