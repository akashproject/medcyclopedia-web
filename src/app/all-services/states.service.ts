import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private http: HttpClient) { }
  getStates(){
    return this.http.get(`${environment.apiUrl}/states`);
  }
}
