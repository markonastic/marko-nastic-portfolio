import { Component, OnInit } from '@angular/core';
import { IProject } from '../interfaces/project';
import { ProjectsService } from '../services/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: IProject[] = null;
  public currentProject: IProject = null;

  constructor(private projectService: ProjectsService) { }

  public ngOnInit(): void {
    this.projectService.getProjects().subscribe((response: IProject[]) => this.projects = response);
  }

  public onProjectEvent(event: any): void {
    this.currentProject = event;
  }
}
