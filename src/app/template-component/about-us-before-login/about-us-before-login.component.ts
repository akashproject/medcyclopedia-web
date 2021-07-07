import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-before-login',
  templateUrl: './about-us-before-login.component.html',
  styleUrls: ['./about-us-before-login.component.scss']
})
export class AboutUsBeforeLoginComponent implements OnInit {

  hide:boolean = false;
  active: boolean = false;

  constructor() { }

  smsl(){
    this.active = !this.active;
    this.hide = !this.hide;
  }

  ngOnInit(): void {
  }

}
