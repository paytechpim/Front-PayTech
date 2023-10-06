import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExecutaHttpService {
  private headers;

  constructor(private http: HttpClient) {
      this.headers= new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('access_token')}`});
  }

  public executarURLGet(url: string): Observable<any>{
    return this.http.get(url, { headers: this.headers });
  }

  public executarURLPOST(url: string, object: any): Observable<any>{
    return this.http.post(url, object, { headers: this.headers });
  }

  public executarURLDELETE(url: string): Observable<any>{
    return this.http.delete(url, { headers: this.headers });
  }

}
