import {Type} from '@angular/core';
import { ActionReducer, State } from '@ngrx/store';

export interface FeatureInfo {
  reducer?: ActionReducer<any>;
  actions?: Type;
  effects?: Type;
  selectors?: Type;
  state?: Type;
}

/**
 * Massage a feature so that it is scoped to a given selector
 * Primarily this is related to the fact that a feature will use a reducer
 * that is part of a bigger application reducer that is accessed via a property
 * key. This function also defines a provider for a "State" service that is also
 * scoped to the given selector.
 */
export function scopeFeature(selector: string, options: FeatureInfo) {
  let providers = [];
  let reducer = {};

  // Create a reducer object that uses the selector as a key
  if (options.reducer) {
    reducer[selector] = options.reducer;
  }

  // Collect up all the services that need to be provided
  if (options.actions) {
    providers.push(options.actions);
  }

  if (options.selectors) {
    providers.push(options.selectors);
  }
  if (options.state) {
    providers.push({ provide: options.state, deps: [State], useFactory: (state$) => state$.map((s) => s[selector]) });
  }

 return { providers, reducer, effects: options.effects || [] };
}
