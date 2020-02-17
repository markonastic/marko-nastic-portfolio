import { Component, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  activeRoute = 0;
  homeOffset = null;
  aboutOffset = null;
  projectsOffset = null;
  contactOffset = null;

  ngAfterViewInit() {
    this.calcOffset();
  }

  calcOffset() {
    this.homeOffset = (document.querySelector('#home') as HTMLElement).offsetTop;
    this.aboutOffset = (document.querySelector('#about') as HTMLElement).offsetTop;
    this.projectsOffset = (document.querySelector('#projects') as HTMLElement).offsetTop;
    this.contactOffset = (document.querySelector('#contact') as HTMLElement).offsetTop;
  }

  onResize() {
    this.calcOffset();
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    if (window.pageYOffset >= this.homeOffset - 100 && window.pageYOffset < this.aboutOffset - 100) {
      this.activeRoute = 0;
    } else if (window.pageYOffset >= this.aboutOffset - 100 && window.pageYOffset < this.projectsOffset - 100) {
      this.activeRoute = 1;
    } else if (window.pageYOffset >= this.projectsOffset - 100 && window.pageYOffset < this.contactOffset - 100) {
      this.activeRoute = 2;
    } else if (window.pageYOffset >= this.contactOffset - 100) {
      this.activeRoute = 3;
    } else {
      this.activeRoute = -1;
    }
  }
}
