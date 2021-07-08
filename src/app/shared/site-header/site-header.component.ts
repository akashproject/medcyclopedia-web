import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
  menu: boolean = false;
  constructor() { }
  
  menuopen(){
    this.menu = !this.menu;
  }
  menuclose(){
    this.menu = false;
  }

  ngOnInit(): void {
  }

}
