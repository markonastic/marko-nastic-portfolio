import { Component, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';

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

  constructor(private location: Location) {
  }

  public ngAfterViewInit(): void {
    this.calcOffset();
  }

  public calcOffset(): void {
    this.homeOffset = (document.querySelector('#home') as HTMLElement).offsetTop;
    this.aboutOffset = (document.querySelector('#about') as HTMLElement).offsetTop;
    this.projectsOffset = (document.querySelector('#projects') as HTMLElement).offsetTop;
    this.contactOffset = (document.querySelector('#contact') as HTMLElement).offsetTop;
  }

  public checkOffset(): void {
    const { pageYOffset } = window;

    if (pageYOffset >= this.homeOffset && pageYOffset < this.aboutOffset) {
      if (this.activeRoute !== 0) {
        this.changeUrlFragment('#home');
        this.activeRoute = 0;
      }
    } else if (pageYOffset >= this.aboutOffset && pageYOffset < this.projectsOffset) {
      if (this.activeRoute !== 1) {
        this.changeUrlFragment('#about');
        this.activeRoute = 1;
      }
    } else if (pageYOffset >= this.projectsOffset && pageYOffset < this.contactOffset) {
      if (this.activeRoute !== 2) {
        this.changeUrlFragment('#projects');
        this.activeRoute = 2;
      }
    } else if (pageYOffset >= this.contactOffset) {
      if (this.activeRoute !== 3) {
        this.changeUrlFragment('#contact');
        this.activeRoute = 3;
      }
    } else {
      this.activeRoute = -1;
    }
  }

  private changeUrlFragment(fragment: string): void {
    this.location.replaceState(fragment);
  }

  public onResize(): void {
    this.calcOffset();
    this.checkOffset();
  }
}
