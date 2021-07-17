import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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

  ngOnInit() {}

}
