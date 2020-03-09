import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  currentProject = null;

  btnStyles = {
    elStyle: {
      color: 'inherit',
      borderColor: '#e31b6d',
      backgroundColor: 'transparent',
    },

    hoverStyle: {
      backgroundColor: '#e31b6d',
      color: 'white',
    }
  };

  projects = [
    {
      name: 'Weather app',
      madeWith: 'Angular',
      description: 'The app that shows current weather and weather forecast for 5 next days on a 3-hour basis',
      pages: [
        {
          name: 'Live page',
          url: 'https://markonastic.github.io/my-weather-app/'
        },
        {
          name: 'Github repo',
          url: 'https://github.com/markonastic/my-weather-app'
        }
      ],
      images: [
        'assets/projects/weather-1.png',
        'assets/projects/weather-2.png',
        'assets/projects/weather-3.png',
      ]
    },
    {
      name: 'Memory game',
      madeWith: 'Angular',
      description: 'Classic card matching memory game with cards turned upside down',
      pages: [
        {
          name: 'Live page',
          url: 'https://markonastic.github.io/memory-game/'
        },
        {
          name: 'Github repo',
          url: 'https://github.com/markonastic/memory-game'
        }
      ],
      images: [
        'assets/projects/memory-game-1.png',
        'assets/projects/memory-game-2.png',
      ]
    },
    {
      name: 'Top 10 rock artists',
      madeWith: 'Angular with infinite scroll, Bootstrap',
      description: 'This application shows Top 10 rock artists and their albums',
      pages: [
        {
          name: 'Live page',
          url: 'https://markonastic.github.io/top10-rock-artists/'
        },
        {
          name: 'Github repo',
          url: 'https://github.com/markonastic/top10-rock-artists'
        }
      ],
      images: [
        'assets/projects/top10-1.png',
        'assets/projects/top10-2.png'
      ]
    }
  ];

  constructor() { }

  onProjectEvent(event: any) {
    this.currentProject = event;
  }
}
