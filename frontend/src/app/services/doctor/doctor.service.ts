import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const _url = 'http://localhost:5000';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private _http: HttpClient) { }


  getAllDoctors(): Observable<any> {
    return this._http.get<any>(`${_url}/doctors`);
  }

  getDoctorById(docId: any): Observable<any> {
    return this._http.get(`${_url}/doctors/${docId}`);
  }


}
