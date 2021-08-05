import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipService {

  constructor(private http : HttpClient) {}

  getShcolarships(){

    return this.http.get(`${environment.apiUrl}/scholarships`);
  }
}
