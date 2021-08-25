import { Component, OnInit } from '@angular/core';
import { NewseventService } from 'src/app/all-services/newsevent.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  news_events : any = [];
  uploadsUrl: any;

  constructor(private newseventervice : NewseventService) {
      this.uploadsUrl = environment.uploadsUrl;

   }

  ngOnInit(): void {

    this.newseventervice.getNewsEvents().subscribe(res =>{
      console.log(res);
      this.news_events = res;
    })

  }

}
