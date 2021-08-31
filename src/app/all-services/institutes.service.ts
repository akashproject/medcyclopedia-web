import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InstitutesService {

  constructor(private http: HttpClient) { }
  getInstitutes(state_id:any,course_id:any,ownership_type:any){

    return this.http.post(`${environment.apiUrl}/institutes`,{state_id:state_id, course_id:course_id, ownership_type:ownership_type});
  }


  getInstitute(ins_id:any){
    let url = `${environment.apiUrl}/institute/`+ins_id;
    return this.http.get(url);
  }

  getInstritueByCountry(coun_id:any){
    let url = `${environment.apiUrl}/institutes-countrywise/`+coun_id;
    return this.http.get(url);

  }

  getMyInstitutions(user_id:any){
    return this.http.get(`${environment.apiUrl}/my-institutes/`+user_id);
  }

  addMyInstitute(user_id:any, institute_id:any) {
    return this.http.post(`${environment.apiUrl}/add-my-institute`, {user_id : user_id, institute_id : institute_id})
  }

  getAllInstitutes(title:any){
    return this.http.post(`${environment.apiUrl}/all-institutes`, {title : title});
  }

  getInstituteNotification(institute_id:any){
    return this.http.post(`${environment.apiUrl}/notifications`,{institute_id :institute_id});
  }

}
