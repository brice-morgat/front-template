import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableauAdminService {

  constructor(private http: HttpClient) { }

}
