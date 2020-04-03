import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IProject } from '../../project';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  @Input() public currentProject: IProject = null;
  @Output() public closeProjectEvent = new EventEmitter<any>();

  constructor() { }

  public openInNewTab(url: string): void {
    window.open(url);
  }

}
