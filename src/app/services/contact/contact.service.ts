import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContact } from 'src/app/interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>('assets/json/contacts.json');
  }
}
