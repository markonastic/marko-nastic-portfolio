import { Component } from '@angular/core';
import { ISkill } from './../interfaces/skill';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public skills: ISkill[] = [
    { name: 'HTML', percent: '90%' },
    { name: 'CSS', percent: '80%' },
    { name: 'SASS', percent: '70%' },
    { name: 'Bootstrap', percent: '80%' },
    { name: 'JavaScript', percent: '60%' },
    { name: 'Angular', percent: '50%' },
    { name: 'Git', percent: '70%' },
    { name: '.NET', percent: '40%' },
    { name: 'SQL', percent: '50%' }
  ];

  constructor() { }
}
