import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { runEffects } from '@ngrx/effects';
import { AuthStatusComponent } from './auth.component';
import { CurrentUserComponent } from './current-user.component';
import { LoginButtonsComponent } from './login-buttons.component';
import { AuthEffects, AuthSelectors, AuthActions, AuthState } from './auth.store';

@NgModule({
  declarations: [
    AuthStatusComponent,
    CurrentUserComponent,
    LoginButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    AuthStatusComponent
  ],
  providers: [
    AuthSelectors,
    AuthActions,
    AuthState,
    runEffects(AuthEffects)
  ]
})
export class AuthModule {}