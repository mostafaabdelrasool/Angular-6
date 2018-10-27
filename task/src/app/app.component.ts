import { Component } from '@angular/core';
import { Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentRoute: string;
  constructor(private router: Router) {

    //console.log(router) ;
    this.router.events.subscribe((res) => {
      if (res['url']) {
        this.currentRoute = res['url'].replace('/', '');

      }
    })

  }
  title = 'task';
}
