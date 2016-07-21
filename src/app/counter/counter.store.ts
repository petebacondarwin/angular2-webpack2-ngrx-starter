import {Injectable} from '@angular/core';
import {ActionReducer, Dispatcher, State} from '@ngrx/store';

// Action Types
export const INCREMENT = '[counter] INCREMENT';
export const DECREMENT = '[counter] DECREMENT';
export const RESET = '[counter] RESET';

// Action Helpers
@Injectable()
export class CounterActions {
  constructor(public dispatcher: Dispatcher) {}

  increment() {
    this.dispatcher.dispatch({ type: INCREMENT });
  }
  decrement() {
    this.dispatcher.dispatch({ type: DECREMENT });
  }
  reset() {
    this.dispatcher.dispatch({ type: RESET });
  }
}

// Model
export type CounterModel = number;
export class CounterState extends State<CounterModel> {}
export const INITIAL_VALUE: CounterModel = 0;

// Reducer
export const counterReducer: ActionReducer<CounterModel> = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};


export const counterFeature = {
  reducer: counterReducer,
  actions: CounterActions,
  state: CounterState
};