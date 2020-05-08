import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProject } from './../../interfaces/project';
import { openCloseAnimation, openCloseMaskAnimation } from './../../common/animations/modal.animation';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
  animations: [
    openCloseAnimation,
    openCloseMaskAnimation,
  ]
})
export class ProjectModalComponent implements OnInit {

  @Input() public currentProject: IProject = null;
  @Output() public closeProjectModalEvent: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public closeProjectModal(): void {
    this.currentProject = null;
    this.closeProjectModalEvent.emit(null);
  }

}
