import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { environment } from 'src/environments/environment';
import { switchMap, tap, map} from 'rxjs/operators/index';


@Injectable({
  providedIn: 'root'
})
export class SigninService {

  JWT_KEY = 'access_token';

  // localStorage: Storage;

  private user = new BehaviorSubject(null);


  constructor(private http: HttpClient,
    @Inject(LOCAL_STORAGE) private storage: StorageService) { }


  signinUser(mobile : string, password : string) {

    return this.http.post(`${environment.apiUrl}/login`, { mobile: mobile, password: password });
  }

  getCurrentUser() {
    return this.storage.get(this.JWT_KEY) || null;
  }

  logout(){
    localStorage.removeItem(this.JWT_KEY);
    this.user.next(null);


  }

  setToken(data : any){
    this.storage.set(this.JWT_KEY, data);
  }

  getUserData(access_token : string) {

    console.log(access_token);

   const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${access_token}`
  })
    return this.http.get(`${environment.apiUrl}/user`, {headers : headers});

  }

  updateUser(name:string, mobile:string, homestate:string, gender:string, cast:string, city:string, physical_status:string, email:string, neet:string, access_token:string){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    })

    return this.http.put(`${environment.apiUrl}/updateprofile`,
      {name: name, mobile:mobile, homestate:homestate, gender : gender, cast: cast, city:city, physical_status:physical_status, email:email, score:neet}, {headers: headers});

  }
}
