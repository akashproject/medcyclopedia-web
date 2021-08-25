import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { InstitutesService } from 'src/app/all-services/institutes.service';
import { SnackbarService } from 'src/app/all-services/snackbar.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-abroad-ins-list',
  templateUrl: './abroad-ins-list.component.html',
  styleUrls: ['./abroad-ins-list.component.scss']
})
export class AbroadInsListComponent implements OnInit {

  instritutes:any;
  counter: any;
  uploadsUrl: any;

  constructor(private route: ActivatedRoute,private router:Router,private insService:InstitutesService,
    private snackbar: SnackbarService) {
    this.uploadsUrl = environment.uploadsUrl;

   }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id)

    if(id === null) {
      this.snackbar.openSnackBarWithTime("Please select the country again", 'close')
    }
    else{
      this.insService.getInstritueByCountry(id).subscribe(res=>{

        console.log(res);
        this.instritutes = res;
        this.counter = this.instritutes.length;
  
      })
    }

   
  }

}
