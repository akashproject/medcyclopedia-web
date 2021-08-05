import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewseventService {

  constructor(private http : HttpClient) { }

  getNewsEvents(){

    return this.http.get(`${environment.apiUrl}/newsevents`);
  }
}
