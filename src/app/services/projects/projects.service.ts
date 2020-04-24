import { IProject } from '../../interfaces/project';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>('assets/json/projects.json');
  }
}
