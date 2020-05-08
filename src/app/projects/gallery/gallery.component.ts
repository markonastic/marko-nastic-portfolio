import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() public images: string[] = null;
  public carouselWidth: number;
  private _direction = 1;
  private _translateAmount: number;

  constructor() { }

  public ngOnInit(): void {
    this.carouselWidth = this.images.length * 100;
    this._translateAmount = 100 / this.images.length;
  }

  public slideImage(_direction: number): void {
    const carousel: HTMLElement = document.querySelector('.carousel');
    const slider: HTMLElement = document.querySelector('.slider');

    if (_direction === 1) {

      if (this._direction === -1) {
        this._direction = 1;
        slider.prepend(slider.lastElementChild);
        carousel.style.justifyContent = 'flex-start';
      }

      slider.style.transform = 'translate(-' + this._translateAmount + '%)';

    } else {

      if (this._direction === 1) {
        this._direction = -1;
        slider.appendChild(slider.firstElementChild);
        carousel.style.justifyContent = 'flex-end';
      }

      slider.style.transform = 'translate(' + this._translateAmount + '%)';
    }
  }

  public sliderTransitionEnd(): void {
    const slider: HTMLElement = document.querySelector('.slider');

    if (this._direction === 1) {
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

}
