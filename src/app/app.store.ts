import {provideStore, State} from '@ngrx/store';
import {runEffects} from '@ngrx/effects';
import {scopeFeature} from '../shared/scope-feature';

// Import features
// A feature represents an organisational aspect of the application that has state, effects and UI
// Each feature should export an object that adheres to the FeatureOptions
// interface found in the `../shared/scope-feature` module
import {counterFeature} from './counter';
import {authReducer, AuthState} from './auth';
// ...

// Scope the features to named selectors
const counter = scopeFeature('counter', counterFeature);

// Angular Providers
// Export all the store related providers for this app that we have
// collected up from the features
export const STORE_PROVIDERS = [
  counter.providers,
  provideStore(Object.assign({ auth: authReducer }, counter.reducer)),

  { provide: AuthState, deps: [State], useFactory: (state$) => state$.map((s) => s.auth) },
  runEffects(counter.effects)
];