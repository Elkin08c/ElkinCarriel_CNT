import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CntService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCnts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/services`);
  }

  createCnt(cnt: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/services`, cnt);
  }

  deleteCnt(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/services/${id}`);
  }
}
