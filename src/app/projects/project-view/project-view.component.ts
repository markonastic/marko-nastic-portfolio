import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  @Input() currentProject = null;
  @Output() projectEvent = new EventEmitter<any>();

  currentSlide = 0;
  carouselWidth = 100;
  direction = 1;
  translateAmount = null;

  constructor() { }

  ngOnInit() {
    this.carouselWidth = this.currentProject.images.length * 100;
    this.translateAmount = 100 / this.currentProject.images.length;
  }

  slideImage(direction: number) {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const slider = document.querySelector('.slider') as HTMLElement;
    if (direction === 1) {
      if (this.direction === -1) {
        this.direction = 1;
        slider.prepend(slider.lastElementChild);
        carousel.style.justifyContent = 'flex-start';
      }
      slider.style.transform = 'translate(-' + this.translateAmount + '%)';
    } else {
      if (this.direction === 1) {
        this.direction = -1;
        slider.appendChild(slider.firstElementChild);
        carousel.style.justifyContent = 'flex-end';
      }
      slider.style.transform = 'translate(' + this.translateAmount + '%)';
    }
  }

  transitionEnd() {
    const slider = document.querySelector('.slider') as HTMLElement;
    if (this.direction === 1) {
      slider.appendChild(slider.firstElementChild);
    } else {
      slider.prepend(slider.lastElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(() => {
      slider.style.transition = 'all ease-in-out 0.5s';
    });
  }

  closeProject() {
    this.projectEvent.emit(null);
    // setTimeout(() => {
    //   this.currentProject = null;
    // }, 300);
  }
}
