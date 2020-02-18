import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class FormspreeResponse {
  ok: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, message: string) {
    return this.http.post('https://formspree.io/mrgqonlg',
                            {
                              name,
                              email,
                              message
                            }
                         ).pipe();
  }
}
