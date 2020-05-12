import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IProject } from '../../interfaces/project';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  @Input() public currentProject: IProject = null;
  @Output() public closeProjectModalEvent: EventEmitter<void> = new EventEmitter();

  constructor() { }

  public closeProjectModal(): void {
    this.closeProjectModalEvent.emit();
  }
}
