import { Component, OnInit } from '@angular/core';
import { PanelDiscussionService } from 'src/app/all-services/panel-discussion.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-panel-discussion',
  templateUrl: './panel-discussion.component.html',
  styleUrls: ['./panel-discussion.component.scss']
})
export class PanelDiscussionComponent implements OnInit {

  past_panel: any = [];
  upcoming_panel: any = [];
  upFlag: boolean = false;
  pastFlag: boolean = false;
  uploadsUrl: string;
  constructor(private panelService: PanelDiscussionService) { 
    this.uploadsUrl = environment.uploadsUrl;
  }

  ngOnInit() {
    this.panelService.getPastPanelDiscussion().subscribe(data => {
      console.log(data);
      this.upcoming_panel = data;
      if (this.upcoming_panel.length === 0) {
        this.upFlag = true;
      }

    })

    this.panelService.getUpcomingPanelDiscussion().subscribe(data => {
      console.log(data);
      this.past_panel = data;
      if (this.past_panel.length === 0) {
        this.pastFlag = true;
      }

    })
  }

}
