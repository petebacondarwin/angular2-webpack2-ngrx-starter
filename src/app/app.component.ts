import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {AuthStatusComponent} from './auth';
import {StoreLogMonitorComponent} from '@ngrx/store-log-monitor';

@Component({
  selector: 'my-app',
  directives: [
    ROUTER_DIRECTIVES,
    StoreLogMonitorComponent,
    AuthStatusComponent
  ],
  template: `
    <h1>Angular 2, Webpack 2 and @ngrx/Store</h1>
    <app-auth-status></app-auth-status>
    <router-outlet></router-outlet>
    <ngrx-store-log-monitor toggleCommand="ctrl-t"></ngrx-store-log-monitor>
  `
})
export class AppComponent {}
