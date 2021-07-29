import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExploreExamService {

  constructor(private http: HttpClient) { }

  getExams(cid:any){
    let url = `${environment.apiUrl}/exams/`+cid;
    return this.http.get(url);
  }
}
