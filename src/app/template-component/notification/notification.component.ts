import { Component, OnInit } from '@angular/core';
import { InstitutesService } from 'src/app/all-services/institutes.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notifications : any = [];

  constructor(private instituteService : InstitutesService) { }

  ngOnInit(): void {

    this.instituteService.getInstituteNotification("").subscribe(data =>{
      console.log(data);
      // this.loader.hideLoading();
      this.notifications = data;
    })
  }


}
