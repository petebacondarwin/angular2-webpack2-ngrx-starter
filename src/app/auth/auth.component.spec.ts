import {Subject} from 'rxjs/Subject';
import {addProviders, inject, TestComponentBuilder, async} from '@angular/core/testing';
import {Dispatcher} from '@ngrx/store';
import {AuthBackend} from 'angularfire2/providers/auth_backend';

import {MockAuthBackend} from './mocks/mock-auth-backend';

import {AuthStatusComponent} from './auth.component';
import {AuthState, AuthActions, AuthModel, AuthSelectors} from './auth.store';

fdescribe('AuthStatusComponent', () => {

  let builder: TestComponentBuilder;

  beforeEach(() => addProviders([
    Dispatcher,
    { provide: AuthBackend, useValue: new MockAuthBackend() },
    { provide: AuthState, useValue: new Subject<AuthModel>() },
    AuthActions,
    AuthSelectors
  ]));

  beforeEach(inject([TestComponentBuilder], (_builder) => {
    builder = _builder;
  }));

  it('should display messages', async(() =>
    builder.createAsync(AuthStatusComponent).then((fixture) => {
      fixture.detectChanges();

      let element = fixture.debugElement.nativeElement;
      console.log(element);
    })
  ));

});