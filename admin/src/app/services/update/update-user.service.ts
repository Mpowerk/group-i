import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const _url = "http://localhost:5000"
@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  constructor(private http: HttpClient) { }

  postUserData(userId: any, userData:any)
  {
    return this.http.put(`${_url}/updateUser/${userId}`, userData );
  }
}
