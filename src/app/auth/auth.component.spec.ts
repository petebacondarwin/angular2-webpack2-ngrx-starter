import {Subject} from 'rxjs/Subject';
import {addProviders, inject, TestComponentBuilder, async, ComponentFixture} from '@angular/core/testing';
import {Dispatcher} from '@ngrx/store';
import {AuthBackend} from 'angularfire2/providers/auth_backend';

import {MockAuthBackend} from './mocks/mock-auth-backend';

import {AuthStatusComponent} from './auth.component';
import {AuthState, AuthActions, AuthModel, AuthSelectors} from './auth.store';

describe('AuthStatusComponent', () => {
  let authState$: Subject<AuthModel>;
  let authActions: AuthActions;
  let fixture: ComponentFixture<AuthStatusComponent>;

  beforeEach(() => {
    authState$ = new Subject<AuthModel>();
    authActions = new AuthActions(new Dispatcher());
    addProviders([
      { provide: AuthState, useValue: authState$ },
      { provide: AuthActions, useValue: authActions },
      AuthSelectors,
      { provide: AuthBackend, useValue: new MockAuthBackend() }
    ]);
  });

  beforeEach(async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(AuthStatusComponent).then((_fixture_) => fixture = _fixture_);
  })));

  // Hmm what should we test here...?
});