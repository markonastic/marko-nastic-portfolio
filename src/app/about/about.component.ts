import { Component, OnInit } from '@angular/core';
import { ISkill } from './../interfaces/skill';
import { SkillsService } from '../services/skills/skills.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public skills: ISkill[] = null;

  constructor(private skillsService: SkillsService) { }

  public ngOnInit(): void {
    this.skillsService.getSkills().subscribe((skills: ISkill[]) => this.skills = skills);
  }
}
