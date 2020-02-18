import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  @Input() activeRoute: number;

  navs = ['home', 'about', 'projects', 'contact'];

  constructor() { }

  scrollToElement(nav: string) {
    document.querySelector('#' + nav).scrollIntoView();
  }

}
