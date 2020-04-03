import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISkill } from 'src/app/about/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  public getSkills(): Observable<ISkill[]> {
    return this.http.get('assets/json/skills.json')
                    .pipe(map((skills: ISkill[]) => skills));

  }
}
