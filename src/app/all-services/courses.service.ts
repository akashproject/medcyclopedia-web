import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses(){
    return this.http.get(`${environment.apiUrl}/courses`);
  }
}
