import {Component} from 'angular2/core';


@Component({
  selector: 'app',
  template: `
  <h1>Hello Angular 2 and Webpack 2</h1>
  `
})
export class App {
  constructor() {
    console.log('Hello Angular 2 Webpack 2');
  }
}
