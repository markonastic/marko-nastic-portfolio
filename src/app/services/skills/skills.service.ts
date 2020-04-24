import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISkill } from 'src/app/interfaces/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  public getSkills(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>('assets/json/skills.json');

  }
}
