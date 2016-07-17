import {State, provideStore} from '@ngrx/store';

// Import features
import {counterReducer, CounterActions, CounterState} from './counter';
// ...

// Angular Providers
export const STORE_PROVIDERS = [

  // Reducers
  provideStore({
    counter: counterReducer
    // ...
  }),

  // Actions
  CounterActions,
  // ...

  // Sub-states
  { provide: CounterState, deps: [State], useFactory: (state$) => state$.map((s) => s.counter) }
  // ...

];