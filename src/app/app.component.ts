import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular 2, Webpack 2 and @ngrx/Store</h1>
    <app-auth-status></app-auth-status>
    <router-outlet></router-outlet>
    <ngrx-store-log-monitor toggleCommand="ctrl-t"></ngrx-store-log-monitor>
  `
})
export class AppComponent {}
