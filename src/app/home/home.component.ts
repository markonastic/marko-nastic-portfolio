import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  btnStyles = {
    elStyle: {
      borderColor: 'white',
      backgroundColor: 'transparent',
      width: '12rem',
      height: '4rem'
    },

    hoverStyle: {
      backgroundColor: '#05c2c9',
      borderColor: '#05c2c9',
    }
  };

  constructor() { }

  scrollToAbout() {
    document.querySelector('#about').scrollIntoView();
  }
}
