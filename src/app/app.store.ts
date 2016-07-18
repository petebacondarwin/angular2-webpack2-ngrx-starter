import {State, provideStore} from '@ngrx/store';
import { runEffects } from '@ngrx/effects';

// Import features
import {counterReducer, CounterActions, CounterState} from './counter';
import {authReducer, AuthActions, AuthState, AuthEffects} from './auth';
// ...

// Angular Providers
export const STORE_PROVIDERS = [

  // Reducers
  provideStore({
    counter: counterReducer,
    auth: authReducer
    // ...
  }),

  // Actions
  CounterActions,
  AuthActions,
  // ...

  // Sub-states
  { provide: CounterState, deps: [State], useFactory: (state$) => state$.map((s) => s.counter) },
  { provide: AuthState, deps: [State], useFactory: (state$) => state$.map((s) => s.auth) },
  // ...

  // Run Effects
  runEffects(AuthEffects)
];