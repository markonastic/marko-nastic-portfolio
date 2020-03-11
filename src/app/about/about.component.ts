import { Component, OnInit } from '@angular/core';
import { SkillInterface } from './skill';
import { SkillsService } from './../services/skills-service/skills.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills: SkillInterface[] = null;

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.skillsService.getSkills().subscribe((skills: SkillInterface[]) => this.skills = skills);
  }
}
