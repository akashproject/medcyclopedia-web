import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  pro_content: boolean = true;
  pro_content_edit: boolean = false;
  save_buttons: boolean = false;
  edit_button: boolean = true;
  pop:boolean = false;
  constructor() { }

  edit_content(){
    this.pro_content = false;
    this.pro_content_edit = true;
    this.save_buttons = true;
    this.edit_button = false;
  }
  save_content(){
    this.pro_content = true;
    this.pro_content_edit = false;
    this.save_buttons = false;
    this.edit_button = true;
  }
  cancle_content(){
    this.pro_content = true;
    this.pro_content_edit = false;
    this.save_buttons = false;
    this.edit_button = true;
  }

  upload_photo(){
    this.pop = true;
  }
  popClose(){
    this.pop = false;
  }

  add_photo(){
    this.pop = false;
  }
  cancle_photo(){
    this.pop = false;
  }

  ngOnInit(): void {
  }

  

}
