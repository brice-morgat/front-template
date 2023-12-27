import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { createHttpParams } from '../_helpers/http-params';
import { Patient } from '../_models/patient.model';
import { Note } from '../_models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  getNoteByPatId(id: number): Observable<Response> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get<Response>(`http://192.168.56.1:8082/patHistory/getAllByPatId?id=${id}`, { headers: headers}).pipe(
        map(result => result)
      );
  }

  postNote(note: any): Observable<Note> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post<Note>(`http://192.168.56.1:8082/patHistory/add`, note, { headers: headers }).pipe(
        map(result => result)
      );
  }

  modifyNote(note: any): Observable<Note> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.put<Note>(`http://192.168.56.1:8082/patHistory/edit`, note, { headers: headers }).pipe(
        map(result => result)
      );
  }
}
