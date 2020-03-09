import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

  @Input() text: string;
  @Input() styles: {
    elStyle: CSSStyleDeclaration,
    hoverStyle: CSSStyleDeclaration
  };
  @Input() fontAwesome: string;
  @Input() hover: boolean;

  constructor() { }

  onHover(button: HTMLElement, hovered: boolean) {
    if (this.hover) { return; }

    const { style } = button;
    const { elStyle, hoverStyle } = this.styles;
    if (hovered) {
      style.backgroundColor = hoverStyle.backgroundColor;
      style.borderColor = hoverStyle.borderColor;
      style.color = hoverStyle.color;
    } else {
      style.backgroundColor = elStyle.backgroundColor;
      style.borderColor = elStyle.borderColor;
      style.color = elStyle.color;
    }
  }
}
