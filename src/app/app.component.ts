import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {StoreLogMonitorComponent} from '@ngrx/store-log-monitor';

@Component({
  selector: 'my-app',
  directives: [
    ROUTER_DIRECTIVES,
    StoreLogMonitorComponent,
  ],
  template: `
    <h1>Angular 2, Webpack 2 and @ngrx/Store</h1>
    <router-outlet></router-outlet>
    <ngrx-store-log-monitor toggleCommand="ctrl-t"></ngrx-store-log-monitor>
  `
})
export class AppComponent {}
