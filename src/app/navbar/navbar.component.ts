import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements AfterViewInit, OnDestroy {

  @Input() public activeRoute: number;
  public fragmentSubscription: Subscription = null;
  public navs: string[] = ['home', 'about', 'projects', 'contact'];

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  public ngAfterViewInit() {
    this.fragmentSubscription = this.route.fragment.pipe(take(2)).subscribe((fragment: string) => {
      if (fragment === null) {
        this.router.navigate([''], { fragment: 'home' });
      }
    });
  }

  public ngOnDestroy(): void {
    this.fragmentSubscription.unsubscribe();
  }
}
