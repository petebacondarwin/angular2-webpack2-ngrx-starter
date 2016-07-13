import {Component} from '@angular/core';
import {MyUppercasePipe} from './my-uppercase.pipe';


@Component({
  selector: 'app',
  pipes: [MyUppercasePipe],
  template: `
  <navbar>
    <h1>{{ 'Hello Angular 2 and Webpack 2' | myUppercase}}</h1>
  </navbar>

  <main>

    <div>Your Content Here {{ name }}</div>

  </main>

  <footer>AngularClass</footer>
  `
})
export class App {
  constructor() {
    console.log('Hello Angular 2 Webpack 2');
  }
}
