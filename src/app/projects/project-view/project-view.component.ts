import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit, AfterViewInit {

  @Input() currentProject = null;
  @Output() projectEvent = new EventEmitter<any>();

  btnStyles = {
    elStyle: {
      color: '#04c2c9',
      borderColor: '#04c2c9',
      backgroundColor: 'transparent',
      fontSize: '1rem'
    },

    hoverStyle: {
      color: 'white',
      backgroundColor: '#04c2c9'
    }
  };

  currentSlide = 0;
  carouselWidth = 100;
  direction = 1;
  translateAmount = null;
  projectView: HTMLElement;
  close = false;

  constructor() { }

  ngOnInit() {
    this.carouselWidth = this.currentProject.images.length * 100;
    this.translateAmount = 100 / this.currentProject.images.length;
  }

  ngAfterViewInit() {
    this.projectView = document.querySelector('.project-view');
    setTimeout(() => {
      this.projectView.style.transform = 'scale(1)';
    });
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

  sliderTransitionEnd() {
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

  projectViewTransitionEnd() {
    if (this.close) {
      this.projectEvent.emit(null);
    }
  }

  closeProject() {
    this.projectView.style.transform = 'scale(0)';
    this.close = true;
  }

  openInNewTab(url: string) {
    window.open(url);
  }
}
