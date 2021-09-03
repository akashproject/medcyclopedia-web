import { Component, OnInit } from '@angular/core';
import { InstitutesService } from 'src/app/all-services/institutes.service';

@Component({
  selector: 'app-my-alerts',
  templateUrl: './my-alerts.component.html',
  styleUrls: ['./my-alerts.component.scss']
})
export class MyAlertsComponent implements OnInit {

  alerts : any = [];
  upFlag: boolean = false;

  constructor(private instituteService : InstitutesService) { }

  ngOnInit(): void {

    this.instituteService.getInstituteNotification("").subscribe(data =>{
      console.log(data);
      // this.loader.hideLoading();
      this.alerts = data;
      if(this.alerts.length === 0){
        this.upFlag = true;
      }
    })
  }

}
