import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private viewportScroller: ViewportScroller) { }

  public scrollToAnchor(): void {
    this.viewportScroller.scrollToAnchor('about');
  }
}
