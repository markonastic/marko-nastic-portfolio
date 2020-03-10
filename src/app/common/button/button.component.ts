import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

  @Input() text: string;
  @Input() fontAwesome: string;
  @Input() hover: boolean;
  @Input() btnType = 'whiteAqua';
  @Input() hasBorder = false;
  @Input() isBig = false;
  @Input() isSquare = false;
  @Input() fontSize: string;
  @Input() onHover: string;

  constructor() { }
}
