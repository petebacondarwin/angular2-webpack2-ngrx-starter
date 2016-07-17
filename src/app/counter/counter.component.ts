import {Component} from '@angular/core';
import {CounterState, CounterActions} from './counter.store';

@Component({
    selector: 'my-counter',
    template: `
        <button (click)="actions.increment()">Increment</button>
        <div>Current Count: {{ count$ | async }}</div>
        <button (click)="actions.decrement()">Decrement</button>
    `
})
export class CounterComponent {
    constructor(public count$: CounterState, public actions: CounterActions) {}
}