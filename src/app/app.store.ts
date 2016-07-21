import {provideStore} from '@ngrx/store';
import {runEffects} from '@ngrx/effects';
import {scopeFeature} from '../shared/scope-feature';

// Import features
// A feature represents an organisational aspect of the application that has state, effects and UI
// Each feature should export an object that adheres to the FeatureOptions
// interface found in the `../shared/scope-feature` module
import {counterFeature} from './counter';
import {authFeature} from './auth';
// ...

// Scope the features to named selectors
const auth = scopeFeature('auth', authFeature);
const counter = scopeFeature('counter', counterFeature);

// Angular Providers
// Export all the store related providers for this app that we have
// collected up from the features
export const STORE_PROVIDERS = [
  auth.providers,
  counter.providers,
  provideStore(Object.assign({}, auth.reducer, counter.reducer)),
  runEffects(auth.effects, counter.effects)
];