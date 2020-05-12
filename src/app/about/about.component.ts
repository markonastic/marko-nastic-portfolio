import { Component } from '@angular/core';
import { ISkill } from './../interfaces/skill';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public skills: ISkill[] = [
    { name: 'HTML', percent: '70%' },
    { name: 'CSS', percent: '70%' },
    { name: 'SASS', percent: '60%' },
    { name: 'Bootstrap', percent: '60%' },
    { name: 'JavaScript', percent: '50%' },
    { name: 'Angular', percent: '40%' },
    { name: '.NET', percent: '30%' },
    { name: 'Git', percent: '60%' },
  ];

  constructor() {}
}
