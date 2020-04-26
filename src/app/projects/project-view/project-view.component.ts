import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { IProject } from '../../interfaces/project';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements AfterViewInit {

  @Input() public currentProject: IProject = null;
  @Output() public closeProjectEvent = new EventEmitter<any>();
  private _projectView: HTMLElement;
  private _close = false;

  constructor() { }

  public ngAfterViewInit(): void {
    this._projectView = document.querySelector('.project-view');
    setTimeout(() => {
      this._projectView.style.transform = 'scale(1)';
    });
  }

  public projectViewTransitionEnd(): void {
    if (this._close) {
      this.closeProjectEvent.emit(null);
    }
  }

  public closeProject(): void {
    this._projectView.style.transform = 'scale(0)';
    this._close = true;
  }
}
