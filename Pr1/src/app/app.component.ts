import { Component, Input } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pr1';

  constructor(private router: Router) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log(`NavigationStart to "${event.url}"`);
      }
      if (event instanceof NavigationCancel) {
        console.log(`The Guard forbade the transition to "${event.url}"`);
      }
      if (event instanceof NavigationEnd) {
        console.log(`NavigationEnd to "${event.url}"`);
      }
    });

}

}
