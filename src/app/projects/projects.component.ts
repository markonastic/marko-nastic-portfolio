import { Component, OnInit } from '@angular/core';
import { ProjectInterface } from './project';
import { ProjectsService } from './../services/projects-service/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectInterface[] = null;
  currentProject: ProjectInterface = null;

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe((response: ProjectInterface[]) => this.projects = response);
  }

  onProjectEvent(event: any) {
    this.currentProject = event;
  }
}
