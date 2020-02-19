import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  @Input() activeRoute: number;

  navs = ['home', 'about', 'projects', 'contact'];
  showMenu = false;
  constructor() { }

  scrollToElement(nav: string) {
    document.querySelector('#' + nav).scrollIntoView();
  }

  openMenu(el: HTMLElement) {
    this.showMenu = !this.showMenu;
    el.style.animation = this.showMenu ? 'rotateMenuBtn 0.3s' : 'rotateMenuBtnReverse 0.3s';
  }
}
