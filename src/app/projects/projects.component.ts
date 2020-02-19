import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [
    {
      name: 'Weather app',
      madeWith: 'Angular',
      description: 'App that shows current weather and weather forecast for next 7 days every three hours',
      live: 'https://markonastic.github.io/my-weather-app/',
      github: 'https://github.com/markonastic/my-weather-app',
      images: [
        'assets/projects/weather-1.png',
        'assets/projects/weather-2.png',
        'assets/projects/weather-3.png',
      ]
    },
    {
      name: 'Memory game',
      live: 'https://markonastic.github.io/memory-game/',
      github: 'https://github.com/markonastic/memory-game',
      images: [
        'assets/projects/memory-game-1.png',
        'assets/projects/memory-game-2.png',
      ]
    },
    {
      name: 'Top 10 rock artists',
      live: 'https://markonastic.github.io/top10-rock-artists/',
      github: 'https://github.com/markonastic/top10-rock-artists',
      images: [
        'assets/projects/top10-1.png',
        'assets/projects/top10-2.png'
      ]
    }
  ];

  currentSlide = 0;
  showProject = false;
  currentProject = null;
  carouselWidth = 100;
  direction = 1;
  translateAmount = null;

  constructor() { }

  viewProject(projectIndex: number) {
    this.currentProject = this.projects[projectIndex];
    this.carouselWidth = this.currentProject.images.length * 100;
    this.translateAmount = 100 / this.currentProject.images.length;
    this.showProject = true;
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
    this.showProject = false;
    setTimeout(() => {
      this.currentProject = null;
    }, 300);
  }

}
