import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  title = 'tracker';
  @ViewChild('drawer') drawer: any;
  isHandset: boolean | undefined;
  currentUserRole = '';
  currentUserName = '';
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.isHandset$.subscribe((res) => {
      this.isHandset = res;
    });
  }
  clickMenu(routeLink: any): void {
    this.router
      .navigateByUrl(routeLink)
      .then((success) =>
        console.log(
          'navigation success?',
          success,
          this.isHandset ? this.drawer.toggle() : null
        )
      )
      .catch(console.error);
  }

}
