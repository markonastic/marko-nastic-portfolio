import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  activeRoute = 0;
  homeOffset: number = null;
  aboutOffset: number = null;
  projectsOffset: number = null;
  contactOffset: number = null;
  homeElementHeight: number = null;

  ngAfterViewInit() {
    this.calcOffset();
  }

  calcOffset() {
    this.homeElementHeight = (document.querySelector('#home') as HTMLElement).getBoundingClientRect().height;
    this.homeOffset = (document.querySelector('#home') as HTMLElement).offsetTop;
    this.aboutOffset = (document.querySelector('#about') as HTMLElement).offsetTop;
    this.projectsOffset = (document.querySelector('#projects') as HTMLElement).offsetTop;
    this.contactOffset = (document.querySelector('#contact') as HTMLElement).offsetTop;
  }

  checkOffset() {
    const { pageYOffset } = window;
    const amount = this.homeElementHeight / 3;
    if (pageYOffset >= this.homeOffset - amount && pageYOffset < this.aboutOffset - amount) {
      this.activeRoute = 0;
    } else if (pageYOffset >= this.aboutOffset - amount && pageYOffset < this.projectsOffset - amount) {
      this.activeRoute = 1;
    } else if (pageYOffset >= this.projectsOffset - amount && pageYOffset < this.contactOffset - amount) {
      this.activeRoute = 2;
    } else if (pageYOffset >= this.contactOffset - amount) {
      this.activeRoute = 3;
    } else {
      this.activeRoute = -1;
    }
  }

  onResize() {
    this.calcOffset();
    this.checkOffset();
  }
}
