import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  skills = [
    {name: 'HTML', per: '90%'},
    {name: 'CSS', per: '80%'},
    {name: 'SASS', per: '70%'},
    {name: 'Bootstrap', per: '80%'},
    {name: 'JavaScript', per: '60%'},
    {name: 'Angular', per: '50%'},
    {name: 'Git', per: '70%'},
    {name: '.NET', per: '40%'},
    {name: 'SQL', per: '50%'}
  ];

  constructor() { }

}
