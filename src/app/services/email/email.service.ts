import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

    return this.http.post('https://formspree.io/mrgqonlg',
                          {
                            name,
                            email,
                            message
                          },
                          { headers }
                         )
                    .pipe(map((response: IFormspreeResponse) => response));
  }
}
