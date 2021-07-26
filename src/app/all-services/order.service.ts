import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(date:any,time:any,media:any,language:any,order_id:any,payment_id:any,payment_status:any){

    return this.http.post(`${environment.apiUrl}/booking`,{date:date, time:time, media:media,order_id:order_id,language:language,payment_id:payment_id,payment_status:payment_status});
  }


}
