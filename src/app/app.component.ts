import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public activeRoute: number = 0;
  public homeOffset: number = null;
  public aboutOffset: number = null;
  public projectsOffset: number = null;
  public contactOffset: number = null;
  public homeElementHeight: number = null;

  public ngAfterViewInit(): void {
    this.calcOffset();
  }

  public calcOffset(): void {
    this.homeElementHeight = (document.querySelector('#home') as HTMLElement).getBoundingClientRect().height;
    this.homeOffset = (document.querySelector('#home') as HTMLElement).offsetTop;
    this.aboutOffset = (document.querySelector('#about') as HTMLElement).offsetTop;
    this.projectsOffset = (document.querySelector('#projects') as HTMLElement).offsetTop;
    this.contactOffset = (document.querySelector('#contact') as HTMLElement).offsetTop;
  }

  public checkOffset(): void {
    const { pageYOffset } = window;
    const amount: number = this.homeElementHeight / 3;

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

  public onResize(): void {
    this.calcOffset();
    this.checkOffset();
  }
}
