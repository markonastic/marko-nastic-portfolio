import { IProject } from '../../projects/project';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<IProject[]> {
    return this.http.get('assets/json/projects.json')
                    .pipe(map((projects: IProject[]) => projects));
  }
}
