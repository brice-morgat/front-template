import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { createHttpParams } from '../_helpers/http-params';
import { Patient } from '../_models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getAllPatient(): Observable<Response> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get<Response>(`http://192.168.56.1:8081/patient/getAll`, { headers: headers}).pipe(
        map(result => result)
      );
  }

  getPatient(id: number): Observable<Patient> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get<Patient>(`http://192.168.56.1:8081/patient/get?id=${id}`, { headers: headers}).pipe(
        map(result => result)
      );
  }

  postPatient(patient: any): Observable<Patient> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post<Patient>(`http://192.168.56.1:8081/patient/add`, patient, { headers: headers }).pipe(
        map(result => result)
      );
  }
}
