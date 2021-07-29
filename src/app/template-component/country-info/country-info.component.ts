import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {

  currentId:any;

  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.currentId = id;
  }

  redirect(){
    this.router.navigate(['/fyc/fyi/abroad-ins-list', this.currentId]);
  }

}
