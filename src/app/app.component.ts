import {Component} from '@angular/core';
import {StoreLogMonitorComponent} from '@ngrx/store-log-monitor';
import {MyUppercasePipe} from '../shared/my-uppercase.pipe';
import {CounterComponent} from './counter';

@Component({
  selector: 'my-app',
  pipes: [MyUppercasePipe],
  directives: [
    StoreLogMonitorComponent,
    CounterComponent
  ],
  template: `
  <navbar>
    <h1>{{ 'Hello Angular 2 and Webpack 2' | myUppercase}}</h1>
  </navbar>

  <main>

    <div>Your Content Here {{ name }}</div>
    <button (click)="updateName('Other Person')">Change Name</button>

  </main>

  <my-counter></my-counter>

  <ngrx-store-log-monitor toggleCommand="ctrl-t"></ngrx-store-log-monitor>
  `
})
export class AppComponent {
  public name: string;
  constructor() {
    console.log('Hello Angular 2 Webpack 2');
  }

  updateName(value) {
    this.name = value;
  }
}
