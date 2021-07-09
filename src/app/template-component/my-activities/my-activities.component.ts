import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-activities',
  templateUrl: './my-activities.component.html',
  styleUrls: ['./my-activities.component.scss']
})
export class MyActivitiesComponent implements OnInit {

  detailed_p_view: boolean = false;
  course_a: boolean = false;
  photo_g_view: boolean = false;
  virtual_t: boolean = false;
  video_c: boolean = false;
  audio_c: boolean = false;
  whatsapp_c: boolean = false;

  constructor() { }

  detailed_page_view(){
    this.detailed_p_view = true;
    this.course_a = false;
    this.photo_g_view = false;
    this.virtual_t = false;
    this.video_c = false;
    this.audio_c = false;
    this.whatsapp_c = false;
  }

  photo_gallery_view(){
    this.detailed_p_view = false;
    this.course_a = false;
    this.photo_g_view = true;
    this.virtual_t = false;
    this.video_c = false;
    this.audio_c = false;
    this.whatsapp_c = false;
  }

  video_counselling(){
    this.detailed_p_view = false;
    this.course_a = false;
    this.photo_g_view = false;
    this.virtual_t = false;
    this.video_c = true;
    this.audio_c = false;
    this.whatsapp_c = false;
  }

  whatsapp_chat(){
    this.detailed_p_view = false;
    this.course_a = false;
    this.photo_g_view = false;
    this.virtual_t = false;
    this.video_c = false;
    this.audio_c = false;
    this.whatsapp_c = true;
  }

  course_app(){
    this.detailed_p_view = false;
    this.course_a = true;
    this.photo_g_view = false;
    this.virtual_t = false;
    this.video_c = false;
    this.audio_c = false;
    this.whatsapp_c = false;
  }

  virtual_tour(){
    this.detailed_p_view = false;
    this.course_a = false;
    this.photo_g_view = false;
    this.virtual_t = true;
    this.video_c = false;
    this.audio_c = false;
    this.whatsapp_c = false;
  }

  audio_call(){
    this.detailed_p_view = false;
    this.course_a = false;
    this.photo_g_view = false;
    this.virtual_t = false;
    this.video_c = false;
    this.audio_c = true;
    this.whatsapp_c = false;
  }

  ngOnInit(): void {
  }

}
