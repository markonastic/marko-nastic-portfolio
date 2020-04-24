import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface IFormspreeResponse {
  ok: boolean;
  next: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  public sendEmail(name: string, email: string, message: string): Observable<IFormspreeResponse> {
    const headers: HttpHeaders = new HttpHeaders().append('Content-Type', 'application/json');

    return this.http.post<IFormspreeResponse>('https://formspree.io/mrgqonlg',
                          {
                            name,
                            email,
                            message
                          },
                          { headers }
                         );
  }
}
