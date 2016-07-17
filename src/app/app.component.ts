import {Component} from '@angular/core';
import {MyUppercasePipe} from '../shared/my-uppercase.pipe';


@Component({
  selector: 'app',
  pipes: [MyUppercasePipe],
  template: `
  <navbar>
    <h1>{{ 'Hello Angular 2 and Webpack 2' | myUppercase}}</h1>
  </navbar>

  <main>

    <div>Your Content Here {{ name }}</div>
    <button (click)="updateName('Other Person')">Change Name</button>

  </main>

  <footer>AngularClass</footer>
  `
})
export class App {
  public name: string;
  constructor() {
    console.log('Hello Angular 2 Webpack 2');
  }

  updateName(value) {
    this.name = value;
  }
}
