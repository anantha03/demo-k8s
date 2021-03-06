import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


readonly APIUrl = "http://20.81.26.76:3000/api"

//readonly APIUrl = "http://localhost:3000/api"

loginBool: boolean = false;
  registerBool: boolean = false;
  landingPageBool: boolean = false;
  showSignOut: boolean = false;
  checkAdmin: boolean = false;
  IsloginBool: boolean = false
  constructor(private http:HttpClient) { }

  getTitle():Observable<any>{
    return this.http.get<any>(this.APIUrl+'/title');
  }
signUp(userData:any):Observable<any>{
  return this.http.post<any>(this.APIUrl+'/sign-up',userData);
}
login(userData: any): Observable<any> {
  return this.http.post<any>(this.APIUrl + '/login', userData);
}

fileUpload(fileData: any): Observable<any> {
  console.log("fileupload servive")

  return this.http.post<any>(this.APIUrl + '/file-upload', fileData);
}
 }
