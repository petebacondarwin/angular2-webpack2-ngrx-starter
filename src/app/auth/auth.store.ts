import 'rxjs/add/operator/do';
import 'rxjs/add/operator/ignoreElements';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActionReducer, Dispatcher} from '@ngrx/store';
import {FirebaseAuthState, FirebaseAuth, AuthProviders} from 'angularfire2';
import {AuthConfiguration as fbAuthConfiguration} from 'angularfire2/providers/auth_backend';
import {StateUpdates, Effect} from '@ngrx/effects';

// Action Types
export const LOG_IN = '[auth] LOGIN';
export const AUTH_SUCCESS = '[auth] AUTH_SUCCESS';
export const AUTH_FAILURE = '[auth] FAILURE AUTH_FAILURE';
export const LOG_OUT = '[auth] LOG_OUT';

// Action Helpers
@Injectable()
export class AuthActions {
  constructor(public dispatcher: Dispatcher) {}

  login(authConfig: AuthConfiguration) {
    this.dispatcher.dispatch({ type: LOG_IN, payload: authConfig });
  }
  logout() {
    this.dispatcher.dispatch({ type: LOG_OUT });
  }
  authSuccess(authInfo: FirebaseAuthState) {
    this.dispatcher.dispatch({ type: AUTH_SUCCESS, payload: authInfo });
  }
  authFailure(error) {
    this.dispatcher.dispatch({ type: AUTH_FAILURE, payload: error });
  }
}

// Model
export interface AuthConfiguration extends fbAuthConfiguration {
  name: string;
}
export interface AuthModel {
  authenticating: boolean;
  authProviderConfigs: AuthConfiguration[];
  authInfo: FirebaseAuthState;
}
export class AuthState extends Observable<AuthModel> {}

const INITIAL_AUTH_CONFIGURATION: AuthConfiguration[] = [
  { name: 'Google', provider: AuthProviders.Google, scope: ['email'] },
  { name: 'Facebook', provider: AuthProviders.Facebook },
  { name: 'Twitter', provider: AuthProviders.Twitter }
];
const INITIAL_VALUE: AuthModel = {authenticating: false, authProviderConfigs: INITIAL_AUTH_CONFIGURATION, authInfo: null};

// Reducer
export const authReducer: ActionReducer<AuthModel> = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case LOG_IN:
      return Object.assign({}, state, {authenticating: true});
    case AUTH_SUCCESS:
      return Object.assign({}, state, {authenticating: false, authInfo: action.payload});
    case AUTH_FAILURE:
    case LOG_OUT:
      return INITIAL_VALUE;
    default:
      return state;
  }
};

// Selectors
@Injectable()
export class AuthSelectors {
  constructor(private auth$: AuthState) {}

  isLoggedIn$ = this.auth$.map(auth => !!auth.authInfo);
  userInfo$ = this.auth$.map(auth => auth.authInfo && auth.authInfo.auth);
  authProviderConfigs$ = this.auth$.map(auth => auth.authProviderConfigs);
}

// Effects
@Injectable()
export class AuthEffects {
  constructor(private update$: StateUpdates<any>, private auth: FirebaseAuth, private actions: AuthActions) {
    // Grab the initial authentication state
    auth.take(1).subscribe(authInfo => authInfo && actions.authSuccess(authInfo));
  }

  @Effect()
  logout = this.update$
    .whenAction(LOG_OUT)
    .do(() => this.auth.logout())
    .ignoreElements();

  @Effect()
  login = this.update$
    .whenAction(LOG_IN)
    .do(update =>
      this.auth.login(update.action.payload)
        .then(authInfo => this.actions.authSuccess(authInfo), error => this.actions.authFailure(error))
    )
    .ignoreElements();

  @Effect()
  authenticationFailure = this.update$
    .whenAction(AUTH_FAILURE)
    .do(update => console.log(update.action.payload))
    .ignoreElements();
}

export const authFeature = {
  reducer: authReducer,
  actions: AuthActions,
  effects: AuthEffects,
  selectors: AuthSelectors,
  state: AuthState
};