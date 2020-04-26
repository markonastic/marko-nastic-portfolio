import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

  @Input() public type: string = 'button';
  @Input() public size: string = null;
  @Input() public color: string = null;
  @Input() public label: string = null;
  @Input() public icon: string = null;

  constructor() { }
}
