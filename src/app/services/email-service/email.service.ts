import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class FormspreeResponse {
  ok: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, message: string) {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.post('https://formspree.io/mrgqonlg',
                            {
                              name,
                              email,
                              message
                            },
                            { headers }
                         ).pipe();
  }
}
