import 'rxjs/add/operator/do';
import 'rxjs/add/operator/ignoreElements';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActionReducer, Dispatcher} from '@ngrx/store';
import {FirebaseAuthState, FirebaseAuth, AuthProviders} from 'angularfire2';
import {StateUpdates, Effect} from '@ngrx/effects';

// Action Types
export const LOG_IN = '[auth] LOGIN';
export const AUTH_SUCCESS = '[auth] AUTH_SUCCESS';
export const AUTH_FAILURE = '[authFAILURE AUTH_FAILURE';
export const LOG_OUT = '[auth] LOG_OUT';

// Action Helpers
@Injectable()
export class AuthActions {
  constructor(public dispatcher: Dispatcher) {}

  loginViaGoogle() {
    this.login(AuthProviders.Google, ['email']);
  }
  loginViaTwitter() {
    this.login(AuthProviders.Twitter);
  }
  loginViaFacebook() {
    this.login(AuthProviders.Facebook);
  }

  login(provider: AuthProviders, scope?: string[]) {
    this.dispatcher.dispatch({ type: LOG_IN, payload: {provider: provider, scope: scope} });
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
export interface AuthModel {
  authenticating: boolean;
  authInfo: FirebaseAuthState;
}
export class AuthState extends Observable<AuthModel> {}
export const INITIAL_VALUE: AuthModel = {authenticating: false, authInfo: null};
export const WAITING_FOR_AUTHENTICATION_VALUE = {authenticating: true, authInfo: null};

// Reducer
export const authReducer: ActionReducer<AuthModel> = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case LOG_IN:
      return WAITING_FOR_AUTHENTICATION_VALUE;
    case AUTH_SUCCESS:
      return {authenticating: false, authInfo: action.payload};
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