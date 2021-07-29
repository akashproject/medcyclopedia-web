import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { InstitutesService } from 'src/app/all-services/institutes.service';


@Component({
  selector: 'app-abroad-ins-list',
  templateUrl: './abroad-ins-list.component.html',
  styleUrls: ['./abroad-ins-list.component.scss']
})
export class AbroadInsListComponent implements OnInit {

  instritutes:any;

  constructor(private route: ActivatedRoute,private router:Router,private insService:InstitutesService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id)

    this.insService.getInstritueByCountry(id).subscribe(res=>{

      this.instritutes = res;

    })
  }

}
