import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  @Input() public activeRoute: number;

  public navs: string[] = ['home', 'about', 'projects', 'contact'];
  public showMenu: boolean = false;

  constructor() { }

  public scrollToElement(nav: string): void {
    document.querySelector('#' + nav).scrollIntoView();
  }

  public openMenu(el: HTMLElement): void {
    this.showMenu = !this.showMenu;
    this.animateMenuBtn(el);
  }

  public onWindowEvent(el: HTMLElement): void {
    if (this.showMenu) {
      this.showMenu = false;
      this.animateMenuBtn(el);
    }
  }

  public animateMenuBtn(el: HTMLElement): void {
    el.style.animation = this.showMenu ? 'rotateMenuBtn 0.3s' : 'rotateMenuBtnReverse 0.3s';
  }
}
