import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const authUrl = 'http://localhost:5000'

@Injectable({
  providedIn: 'root'
})
export class AddDrAuthenService {

  constructor(private http: HttpClient) { }


  postDoctorData(docData: any) {
    return this.http.post(`${authUrl}/doctors`, docData, {
      withCredentials: true,
    });
  }
}
