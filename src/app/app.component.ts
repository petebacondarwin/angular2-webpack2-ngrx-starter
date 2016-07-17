import {Component} from '@angular/core';
import {StoreLogMonitorComponent} from '@ngrx/store-log-monitor';
import {CounterComponent} from './counter';

@Component({
  selector: 'my-app',
  directives: [
    StoreLogMonitorComponent,
    CounterComponent
  ],
  template: `
    <h1>Angular 2, Webpack 2 and @ngrx/Store</h1>

    <my-counter></my-counter>

    <ngrx-store-log-monitor toggleCommand="ctrl-t"></ngrx-store-log-monitor>
  `
})
export class AppComponent {
}
