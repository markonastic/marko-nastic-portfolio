import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IContact } from 'src/app/footer/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public getContacts(): Observable<IContact[]> {
    return this.http.get('assets/json/contacts.json')
                    .pipe(map((contacts: IContact[]) => contacts));
  }
}
