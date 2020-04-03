import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

  @Input() public text: string;
  @Input() public fontAwesome: string;
  @Input() public hasBorder: boolean = false;

  constructor() { }
}
