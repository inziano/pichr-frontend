import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'pichr';

  constructor ( private router: Router ) {}

  // component initialition

  ngOnInit () {

    this.router.events.subscribe ( (event: Event) => {

      // If navigation end
      if ( event instanceof NavigationEnd ) {

        // add js to body
        if (document.getElementById('main') !=null) {
          document.getElementById('main').remove();
        }

        const node = document.createElement('script');
        node.src = '../assets/scripts/main.js';
        node.type = 'text/javascript';
        node.async = false;
        node.id = 'main';
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    });

  }

}
