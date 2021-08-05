import { Component, OnInit } from '@angular/core';
import { NewseventService } from 'src/app/all-services/newsevent.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  news_events : any = [];
  constructor(private newseventervice : NewseventService) { }

  ngOnInit(): void {

    this.newseventervice.getNewsEvents().subscribe(res =>{
      console.log(res);
      this.news_events = res;
    })

  }

}
