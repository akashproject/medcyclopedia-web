import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanelDiscussionService {

  constructor(private http : HttpClient) { }

  getPastPanelDiscussion() {
    return this.http.get(`${environment.apiUrl}/past-panel-discussions`);
  }

  getUpcomingPanelDiscussion() {
    return this.http.get(`${environment.apiUrl}/upcoming-panel-discussions`);
  }
}
