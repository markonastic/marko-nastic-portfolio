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
    this.animateMenuBtn(el);
  }

  onWindowEvent(el: HTMLElement) {
    if (this.showMenu) {
      this.showMenu = false;
      this.animateMenuBtn(el);
    }
  }

  animateMenuBtn(el: HTMLElement) {
    el.style.animation = this.showMenu ? 'rotateMenuBtn 0.3s' : 'rotateMenuBtnReverse 0.3s';
  }
}
